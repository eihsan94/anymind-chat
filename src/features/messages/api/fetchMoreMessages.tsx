import { gqlClient } from '@/providers/appProvider';
import { gql } from '@apollo/client';
import { FETCH_LATEST_MESSAGES } from '../hooks/fetchLatestMessages';
import { Message } from '../types';


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