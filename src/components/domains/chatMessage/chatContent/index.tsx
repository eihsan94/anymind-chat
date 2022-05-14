import styled from '@emotion/styled'
import React from 'react'
import ChatItem from './chatItem'
import ReadMoreChatButton from './readMoreChatButton'

interface Props { }

function ChatContent(props: Props) {
    // const {} = props

    return (
        <ChatContentContainer>
            <PrevChatButton />
            <ChatSection>
                <ChatItem isCurrentUser={false} isSuccess={true} />
                <ChatItem isCurrentUser={true} isSuccess={true} />
                <ChatItem isCurrentUser={false} isSuccess={true} />
                <ChatItem isCurrentUser={true} isSuccess={true} />
                <ChatItem isCurrentUser={true} isSuccess={false} />
            </ChatSection>
            <NextChatButton />
        </ChatContentContainer>
    )
}

export default ChatContent

const ChatContentContainer = styled.div`
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