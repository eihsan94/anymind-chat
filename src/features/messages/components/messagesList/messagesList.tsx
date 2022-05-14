import { useChannelContext } from '@/providers/channelProvider'
import { useUnsentMessageContext } from '@/providers/unsentMessageProvider'
import { useUserContext } from '@/providers/userProvider'
import styled from '@emotion/styled'
import { Fragment, useState } from 'react'
import { fetchMoreMessages } from '../../api/fetchMoreMessages'
import { Message } from '../../types'
import MessageItem from './messagesItem'
import ReadMoreMessageButton from './readMoreMessagesButton'


interface Props {
    messages: Message[]
}

export function MessagesList(props: Props) {
    const { messages } = props
    const { currentChannel } = useChannelContext()
    const { currentUser } = useUserContext()
    const { unsentMessages } = useUnsentMessageContext()
    const { channelId } = currentChannel
    const [noMoreNextMessage, setNoMoreNextMessage] = useState(messages.length === 0)
    const getMoreMessage = async (messageId: string, old: boolean) => {
        const d = await fetchMoreMessages(channelId, messageId, old);
        setNoMoreNextMessage(d.length === 0)
    }

    return (
        <MessagesListContainer>
            {messages.length > 9 &&
                <PrevMessageButtonContainer>
                    <ReadMoreMessageButton type='PREV' onClick={() => getMoreMessage(messages[0].messageId, true)} />
                </PrevMessageButtonContainer>}
            <MessageSection>
                {messages.map((message, i) => <MessageItem key={i} message={message} isCurrentUser={message.userId === currentUser.userId} isSuccess={true} />)}
                {unsentMessages.map((unsentMessage, i) =>
                    <Fragment key={i}>
                        {
                            unsentMessage.userId === currentUser.userId && unsentMessage.channelId === currentChannel.channelId && <MessageItem message={unsentMessage} isCurrentUser={true} isSuccess={false} channelId={unsentMessage.channelId} />
                        }
                    </Fragment>

                )}

            </MessageSection>
            {!noMoreNextMessage && <NextMessageButtonContainer>
                <ReadMoreMessageButton type='NEXT' onClick={() => getMoreMessage(messages[messages.length - 1].messageId, false)} />
            </NextMessageButtonContainer>}
        </MessagesListContainer>
    )
}

const MoreButtonStyle = `
    z-index: 3;
    width: 100%;
    background-color: #F4F5FA;
`

const MessagesListContainer = styled.div`
    height: 100%;
    position: relative;
`

const PrevMessageButtonContainer = styled.div`
    position: absolute;
    top: 0;
    ${MoreButtonStyle}
`

const MessageSection = styled.div`
    padding: 3em 0;
    height: calc(100% - 6em);
    overflow: auto;
`

const NextMessageButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    ${MoreButtonStyle}
`
