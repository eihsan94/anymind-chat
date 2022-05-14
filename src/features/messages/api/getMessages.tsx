import { useChannelContext } from '@/providers/channelProvider';
import { parse } from '@/utils/dateUtils';
import { gql, useQuery } from '@apollo/client';
import { Message } from '../types';

const MESSAGE_QUERY = (channelId: string) => gql`
  query {
    fetchLatestMessages(channelId: "${channelId}")  {
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
  const { currentChannel } = useChannelContext()
  const { loading, error, data, fetchMore } = useQuery<FetchLatestMessageQuery>(MESSAGE_QUERY(currentChannelId), {});
  const getLatestMessage = () => {
    fetchMore({ query: MESSAGE_QUERY(currentChannel.channelId) })
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
