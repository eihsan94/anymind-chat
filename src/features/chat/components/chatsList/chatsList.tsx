import styled from '@emotion/styled'
import ChatItem from './chatsItem'
import ReadMoreChatButton from './readMoreChatsButton'


interface Props { }

export function ChatsList(props: Props) {
    // const {} = props

    return (
        <ChatsListContainer>
            <PrevChatButton />
            <ChatSection>
                <ChatItem isCurrentUser={false} isSuccess={true} />
                <ChatItem isCurrentUser={true} isSuccess={true} />
                <ChatItem isCurrentUser={false} isSuccess={true} />
                <ChatItem isCurrentUser={true} isSuccess={true} />
                <ChatItem isCurrentUser={true} isSuccess={false} />
            </ChatSection>
            <NextChatButton />
        </ChatsListContainer>
    )
}


const ChatsListContainer = styled.div`
    height: 100%;
    position: relative;
`

const PrevChatButtonContainer = styled.div`
    position: absolute;
    top: 0;
`
const PrevChatButton = () => {
    return (
        <PrevChatButtonContainer>
            <ReadMoreChatButton type='PREV' />
        </PrevChatButtonContainer>
    )
}

const ChatSection = styled.div`
    padding: 3em 0;
`

const NextChatButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
`
const NextChatButton = () => {
    return (
        <NextChatButtonContainer>
            <ReadMoreChatButton type='NEXT' />
        </NextChatButtonContainer>
    )
}