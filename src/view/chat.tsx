import styled from '@emotion/styled'
import Grid, { Col, Row } from '../components/grid'
import SideNav from '../components/sideNav'
import TopNav from '../components/topNav'

interface Props { }

function Chat(props: Props) {

    return (
        <ChatContainer>
            <TopNav />
            <Grid>
                <Row>
                    <Col size={2}>
                        <SideNav />
                    </Col>
                    <Col size={8}>
                        message components
                    </Col>
                </Row>
            </Grid>
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    background-color:#F4F5FA;
    height: 100vh;
`


