import { parse } from '@/utils/dateUtils';
import { gql, useQuery } from '@apollo/client';
import { Message } from '../types';

export const GET_MESSAGES = gql`
  query GetMessages($channelId: String!) {
    fetchLatestMessages(channelId: $channelId)  {
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

export const useMessages = (currentChannelId: string) => {
  const { loading, error, data, fetchMore } = useQuery<FetchLatestMessageQuery>(GET_MESSAGES, {
    variables: { channelId: currentChannelId }
  });
  const getLatestMessage = () => {
    fetchMore({ query: GET_MESSAGES, variables: { channelId: currentChannelId } })
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
