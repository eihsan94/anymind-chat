import { gql, useMutation } from '@apollo/client';
import { Message } from '../types';
import { GET_MESSAGES } from './getMessages';

const POST_MESSAGE = gql`
mutation PostMessage($channelId: String!, $text: String!, $userId: String!) {
  postMessage(channelId: $channelId, text: $text, userId: $userId) {
    messageId
    datetime
    text
    userId 
  }
}
`

interface PostMessageMutation {
  postMessage: Message
}

export const usePostMessage = () => {
  const [postMessage, { data, loading, error }] = useMutation<PostMessageMutation>(POST_MESSAGE, {
    refetchQueries: [
      GET_MESSAGES, // DocumentNode object parsed with gql
      'GetMessages' // Query name
    ],
  });

  const emptyMessage: Message = {
    messageId: "",
    text: "",
    userId: "",
    datetime: "",
  }
  if (loading || error) {
    return {
      loading,
      error,
      message: emptyMessage,
      postMessage,
    };
  }

  const message = data?.postMessage || emptyMessage
  return {
    loading,
    error,
    message,
    postMessage
  };
};
