import { Avatar } from '@/components/core-ui/avatar';
import { IconButton } from '@/components/core-ui/button/iconButton';
import Icon from '@/components/core-ui/icons/icons';
import { Text } from '@/components/core-ui/text';
import { MockUserImage } from '@/mock/mockUserData';
import { useMessageContext } from '@/providers/messageProvider';
import { fmtTime } from '@/utils/dateUtils';
import { AlertError } from '@/utils/errorAlertUtils';
import styled from '@emotion/styled'
import { AiFillCheckCircle, AiOutlineReload } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { usePostMessage } from '../../api/postMesage';
import { Message, UnsentMessage } from '../../types';


interface Props {
    message: Message;
    isCurrentUser: boolean;
    isSuccess: boolean;
    channelId?: string;
}

function MessageItem(props: Props) {
    const { isCurrentUser, isSuccess, message, channelId } = props
    const { text, datetime, userId } = message
    const avatarImage = MockUserImage[userId]
    const { postMessage } = usePostMessage()
    const { removeUnsentMessage } = useMessageContext()

    const resendMessage = async () => {
        try {
            await postMessage({ variables: { userId: userId, channelId: channelId, text: text } })
            const currUnsentMessage: UnsentMessage = { ...message, channelId: `${channelId}` }
            removeUnsentMessage(currUnsentMessage)
        } catch (error: any) {
            AlertError(error)
        }
    }
    return (
        <MessageItemContainer isCurrentUser={isCurrentUser}>
            <Avatar image={avatarImage} name={message.userId} />
            <MessageBubble isCurrentUser={isCurrentUser}>
                {text}
            </MessageBubble>
            <MessageStatus>
                <MessageStatusContent>
                    {
                        !isSuccess && <IconButton onClick={resendMessage} Icon={<Icon height={17} width={17}><AiOutlineReload /></Icon>} />
                    }
                    <Text>
                        {fmtTime(datetime)}
                    </Text>
                    {
                        isCurrentUser &&
                        <Status isSuccess={isSuccess} />
                    }
                </MessageStatusContent>
            </MessageStatus>
        </MessageItemContainer>
    )
}

export default MessageItem

interface MessageItemContainerProps {
    isCurrentUser: boolean;
}
const MessageItemContainer = styled.div<MessageItemContainerProps>`
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
interface MessageBubbleProps {
    isCurrentUser: boolean;
}
const MessageBubble = styled.div<MessageBubbleProps>`
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
const MessageStatus = styled.div`
    font-size:12px;
    margin: auto 0;
    height: 100%;
`
const MessageStatusContent = styled.div`
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
`