import { gqlClient } from '@/providers/appProvider';
import { parse } from '@/utils/dateUtils';
import { gql, useQuery } from '@apollo/client';
import { Message } from '../types';
import { FETCH_LATEST_MESSAGES } from './fetchLatestMessages';

export const FETCH_MORE_MESSAGES = gql`
  query FetchMoreMessages($channelId: String!, $messageId: String!, $old:Boolean!) {
    fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old)  {
      __typename
      messageId
      datetime
      text
      userId
  }
}
`

interface FetchMoreMessageQuery {
  fetchMoreMessages: Message[]
}

export const useFetchMoreMessages = (currentChannelId: string, messageId: string, old: boolean) => {
  const { loading, error, data } = useQuery<FetchMoreMessageQuery>(FETCH_MORE_MESSAGES, {
    variables: { channelId: currentChannelId, messageId, old }
  });
  if (loading || error) {
    return {
      loading,
      error,
      messages: [],
    };
  }

  const unsortedMessages = data?.fetchMoreMessages || []
  const messages = [...unsortedMessages].sort((a, b) => (parse(a.datetime).getTime()) - (parse(b.datetime).getTime()))
  return {
    loading,
    error,
    messages,
  };
};


export const fetchMoreMessages = async (currentChannelId: string, messageId: string, old: boolean) => {
  const { data } = await gqlClient.query<FetchMoreMessageQuery>({
    query: FETCH_MORE_MESSAGES,
    variables: { channelId: currentChannelId, messageId, old }
  })
  const messages = data?.fetchMoreMessages || []
  if (messages.length > 0) {
    await gqlClient.writeQuery({
      query: FETCH_LATEST_MESSAGES,
      variables: { channelId: currentChannelId },
      data: { fetchLatestMessages: messages }
    })
  }
  return messages
}