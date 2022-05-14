import { Avatar } from '@/components/core-ui/avatar';
import Icon from '@/components/core-ui/icons/icons';
import { Text } from '@/components/core-ui/text';
import styled from '@emotion/styled'
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdError } from 'react-icons/md';


interface Props {
    isCurrentUser: boolean;
    isSuccess: boolean;
}

function ChatItem(props: Props) {
    const { isCurrentUser, isSuccess } = props

    return (
        <ChatItemContainer isCurrentUser={isCurrentUser}>
            <Avatar image="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" name="Russell" />
            <ChatBubble isCurrentUser={isCurrentUser}>
                Hello i am ihsan <br />
                i am so awesome handsome and smart  <br />
            </ChatBubble>
            <ChatStatus>
                <ChatStatusContent>
                    <Text>
                        8:55
                    </Text>
                    {
                        isCurrentUser &&
                        <Status isSuccess={isSuccess} />
                    }
                </ChatStatusContent>
            </ChatStatus>
        </ChatItemContainer>
    )
}

export default ChatItem

interface ChatItemContainerProps {
    isCurrentUser: boolean;
}
const ChatItemContainer = styled.div<ChatItemContainerProps>`
    margin: 2em 0;
    display: flex;
    flex-direction: ${({ isCurrentUser }) => isCurrentUser ? "row-reverse" : "row"};
    align-items: flex-start;
    width: fit-content;
    height: fit-content;
    width: 100%;
`

const RightArrowStyle = `
    right:-7px;
    left: auto;
    border-width: 8px 0 8px 9px;
    border-color: transparent transparent transparent #FFFFFF;

`
const LeftArrowStyle = `
    left:-7px;
    right: auto;
    border-width: 8px 9px 8px 0px;
    border-color: transparent #FFFFFF transparent transparent;
`
interface ChatBubbleProps {
    isCurrentUser: boolean;
}
const ChatBubble = styled.div<ChatBubbleProps>`
    border-radius: 5px;
    padding: 10px;
    background: #FFFFFF;
    height: 100%;
    margin: 0px 10px;
    position: relative;
    text-align: ${({ isCurrentUser }) => isCurrentUser ? "end" : "start"};
    &:after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        top: 10px;
        bottom: auto;
        border: 5px solid;
        ${({ isCurrentUser }) => isCurrentUser ? RightArrowStyle : LeftArrowStyle};
    }
`
const ChatStatus = styled.div`
    font-size:12px;
    margin: auto 0;
    height: 100%;
`
const ChatStatusContent = styled.div`
    display: flex;
`
interface StatusProps {
    isSuccess: boolean;
}
function Status(props: StatusProps) {
    const { isSuccess } = props
    const statusContent = {
        text: isSuccess ? "Sent" : "Error",
        icon: isSuccess ? <AiFillCheckCircle fill="#A9C762" /> : <MdError fill="#A62839" />,
    }
    return (
        <StatusContainer>
            <Icon width={12} height={12}>
                {statusContent.icon}
            </Icon>
            <Text>
                {statusContent.text}
            </Text>
        </StatusContainer>

    )
}
const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    background: beige;
`