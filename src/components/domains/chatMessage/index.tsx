import React from 'react'
import styled from '@emotion/styled'
import { Theme } from '../../../styles/theme'
import { Heading2 } from '../../core-ui/text'
import ChatContent from './chatContent'
import SendMessage from './sendMessage'

interface Props { }

function ChatMessage(props: Props) {
    // const {} = props
    const headerHeight = 50
    const footerHeight = 160

    return (
        <ChatMessageContainer>
            <ChatHeader height={headerHeight}>
                <Heading2>Chat header</Heading2>
            </ChatHeader>
            <ChatBody headerHeight={headerHeight} footerHeight={footerHeight}>
                <ChatContent />
            </ChatBody>
            <ChatFooter height={footerHeight}>
                <SendMessage />
            </ChatFooter>
        </ChatMessageContainer>
    )
}

export default ChatMessage

const ChatMessageContainer = styled.div`
    height: 100%;

`
interface ChatHeaderProps {
    height: number
}
const ChatHeader = styled.div<ChatHeaderProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1em;
    height: ${({ height }) => height}px;
    border-bottom: ${Theme.styles.border};
`

interface ChatBodyProps {
    headerHeight: number
    footerHeight: number
}
const ChatBody = styled.div<ChatBodyProps>`
    padding: 0 1em;
    height: ${({ headerHeight, footerHeight }) => `calc(100% - ${headerHeight + 1}px - ${footerHeight}px)`} ;
    overflow: auto;
`

interface ChatFooterProps {
    height: number
}
const ChatFooter = styled.div<ChatFooterProps>`
height: ${({ height }) => height}px;
`

