import { parse } from '@/utils/dateUtils';
import { gql, useQuery } from '@apollo/client';
import { Message } from '../types';

export const FETCH_LATEST_MESSAGES = gql`
  query FetchLatestMessages($channelId: String!) {
    fetchLatestMessages(channelId: $channelId)  {
      __typename
      messageId
      datetime
      text
      userId     
    }
  }
`

interface FetchLatestMessageQuery {
  fetchLatestMessages: Message[]
}


export const useFetchLatestMessages = (currentChannelId: string) => {
  const { loading, error, data, fetchMore } = useQuery<FetchLatestMessageQuery>(FETCH_LATEST_MESSAGES, {
    variables: { channelId: currentChannelId }
  });

  const getLatestMessage = () => {
    fetchMore({ query: FETCH_LATEST_MESSAGES, variables: { channelId: currentChannelId } })
  }

  if (loading || error) {
    return {
      loading,
      error,
      messages: [],
      getLatestMessage,
    };
  }

  const unsortedMessages = data?.fetchLatestMessages || []
  const messages = [...unsortedMessages].sort((a, b) => (parse(a.datetime).getTime()) - (parse(b.datetime).getTime()))

  return {
    loading,
    error,
    messages,
    getLatestMessage
  };
};
