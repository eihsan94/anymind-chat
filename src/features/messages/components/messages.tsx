
import { Grid, Row, Col } from '@/components/core-ui/grid';
import { Heading2, Text } from '@/components/core-ui/text';
import { SideNav } from '@/components/sideNav';
import { TopNav } from '@/components/topNav';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled'
import { MessagesList } from './messagesList';
import { CreateMessage } from './createMessages';
import { useFetchLatestMessages } from '../api/fetchLatestMessages';
import { useChannelContext } from '@/providers/channelProvider';
import { useEffect } from 'react';
import { MockChannelData } from '@/mock/mockChannelData';

interface Props { }

export function Messages(props: Props) {
    const topNavHeight = 70
    const headerHeight = 50
    const footerHeight = 160
    const { currentChannel } = useChannelContext()
    const { loading, error, messages, getLatestMessage } = useFetchLatestMessages(currentChannel.channelId)
    const channelName = MockChannelData.find(c => c.id === currentChannel.channelId)?.name
    useEffect(() => {
        console.log("getting the latest message");
        getLatestMessage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentChannel.channelId])
    return (
        <>
            <TopNav height={topNavHeight} />
            <MessagesContainer topNavHeight={topNavHeight}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <SideNav />
                        </Col>
                        <Col size={8}>
                            <MessageMessageContainer>
                                <MessageHeader height={headerHeight}>
                                    <Heading2>{channelName} Channel</Heading2>
                                </MessageHeader>
                                <MessageBody headerHeight={headerHeight} footerHeight={footerHeight}>
                                    {
                                        loading
                                            ? <Text>Loading...</Text>
                                            : error
                                                ? <Text variants='ERROR'>{error.message}</Text>
                                                : <MessagesList messages={messages} />
                                    }
                                </MessageBody>
                                <MessageFooter height={footerHeight}>
                                    <CreateMessage />
                                </MessageFooter>
                            </MessageMessageContainer>
                        </Col>
                    </Row>
                </Grid>
            </MessagesContainer>
        </>
    )
}


interface MessagesContainerProps {
    topNavHeight: number;
}
const MessagesContainer = styled.div<MessagesContainerProps>`
    background-color:#F4F5FA;
    height: ${({ topNavHeight }) => `calc(100vh - ${topNavHeight}px)`} ;
`
const MessageMessageContainer = styled.div`
    height: 100%;

`
interface MessageHeaderProps {
    height: number
}
const MessageHeader = styled.div<MessageHeaderProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 1em;
    height: ${({ height }) => height}px;
    border-bottom: ${Theme.styles.border};
`

interface MessageBodyProps {
    headerHeight: number
    footerHeight: number
}
const MessageBody = styled.div<MessageBodyProps>`
    padding: 0 1em;
    height: ${({ headerHeight, footerHeight }) => `calc(100% - ${headerHeight + 1}px - ${footerHeight}px)`} ;
`

interface MessageFooterProps {
    height: number
}
const MessageFooter = styled.div<MessageFooterProps>`
height: ${({ height }) => height}px;
`

