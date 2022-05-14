
import { Grid, Row, Col } from '@/components/core-ui/grid';
import { Heading2 } from '@/components/core-ui/text';
import { SideNav } from '@/components/sideNav';
import { TopNav } from '@/components/topNav';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled'
import { ChatsList } from './chatsList';
import { CreateChat } from './createChats';

interface Props { }

export function Chats(props: Props) {
    const topNavHeight = 70
    const headerHeight = 50
    const footerHeight = 160
    return (
        <>
            <TopNav height={topNavHeight} />
            <ChatsContainer topNavHeight={topNavHeight}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <SideNav />
                        </Col>
                        <Col size={8}>


                            <ChatMessageContainer>
                                <ChatHeader height={headerHeight}>
                                    <Heading2>Chat header</Heading2>
                                </ChatHeader>
                                <ChatBody headerHeight={headerHeight} footerHeight={footerHeight}>
                                    <ChatsList />
                                </ChatBody>
                                <ChatFooter height={footerHeight}>
                                    <CreateChat />
                                </ChatFooter>
                            </ChatMessageContainer>
                        </Col>
                    </Row>
                </Grid>
            </ChatsContainer>
        </>
    )
}


interface ChatsContainerProps {
    topNavHeight: number;
}
const ChatsContainer = styled.div<ChatsContainerProps>`
    background-color:#F4F5FA;
    height: ${({ topNavHeight }) => `calc(100vh - ${topNavHeight}px)`} ;
    overflow: auto;
`
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

