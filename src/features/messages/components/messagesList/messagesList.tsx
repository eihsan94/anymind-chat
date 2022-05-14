import { useUserContext } from '@/providers/userProvider'
import styled from '@emotion/styled'
import { Message } from '../../types'
import MessageItem from './messagesItem'
import ReadMoreMessageButton from './readMoreMessagesButton'


interface Props {
    messages: Message[]
}

export function MessagesList(props: Props) {
    const { messages } = props
    const { currentUser } = useUserContext()
    return (
        <MessagesListContainer>
            <PrevMessageButton />
            <MessageSection>
                {messages.map((message, i) => <MessageItem key={i} message={message} isCurrentUser={message.userId === currentUser.userId} isSuccess={true} />)}
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