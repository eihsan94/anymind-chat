import { useChannelContext } from '@/providers/channelProvider'
import { useMessageContext } from '@/providers/messageProvider'
import { useUserContext } from '@/providers/userProvider'
import styled from '@emotion/styled'
import { Fragment } from 'react'
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
    const { unsentMessages } = useMessageContext()
    console.log({ unsentMessages });

    return (
        <MessagesListContainer>
            <PrevMessageButton />
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
            <NextMessageButton />
        </MessagesListContainer>
    )
}


const MessagesListContainer = styled.div`
    height: 100%;
    position: relative;
`

const PrevMessageButtonContainer = styled.div`
    position: absolute;
    top: 0;
`
const PrevMessageButton = () => {
    return (
        <PrevMessageButtonContainer>
            <ReadMoreMessageButton type='PREV' />
        </PrevMessageButtonContainer>
    )
}

const MessageSection = styled.div`
    padding: 3em 0;
`

const NextMessageButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
`
const NextMessageButton = () => {
    return (
        <NextMessageButtonContainer>
            <ReadMoreMessageButton type='NEXT' />
        </NextMessageButtonContainer>
    )
}