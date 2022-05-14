import styled from '@emotion/styled'
import Grid, { Col, Row } from '../components/core-ui/grid'
import ChatMessage from '../components/domains/chatMessage'
import SideNav from '../components/domains/sideNav'
import TopNav from '../components/domains/topNav'

interface Props { }

function Chat(props: Props) {
    const topNavHeight = 70
    return (
        <>
            <TopNav height={topNavHeight} />
            <ChatContainer topNavHeight={topNavHeight}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <SideNav />
                        </Col>
                        <Col size={8}>
                            <ChatMessage />
                        </Col>
                    </Row>
                </Grid>
            </ChatContainer>
        </>
    )
}

export default Chat

interface ChatContainerProps {
    topNavHeight: number;
}
const ChatContainer = styled.div<ChatContainerProps>`
    background-color:#F4F5FA;
    height: ${({ topNavHeight }) => `calc(100vh - ${topNavHeight}px)`} ;
    overflow: auto;
`


