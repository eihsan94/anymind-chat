import { PrimaryButton } from '@/components/core-ui/button'
import Icon from '@/components/core-ui/icons/icons'
import { TextAreaInput } from '@/components/core-ui/inputs'
import { Text } from '@/components/core-ui/text'
import { useChannelContext } from '@/providers/channelProvider'
import { useUserContext } from '@/providers/userProvider'
import styled from '@emotion/styled'
import { useState } from 'react'
import { GrSend } from 'react-icons/gr'
import { usePostMessage } from '../api/postMesage'

interface Props {
}

export function CreateMessage(props: Props) {
    // const { height } = props
    const [text, setText] = useState("")
    const { currentChannel } = useChannelContext()
    const { currentUser } = useUserContext()
    const { postMessage, loading } = usePostMessage()

    const inputMessage = (typedText: string) => {
        setText(typedText)
    }

    const sendMessage = () => {
        setText("")
        postMessage({ variables: { text, channelId: currentChannel.channelId, userId: currentUser.userId } })

    }


    return (
        <SendMessageContainer>
            <TextAreaInput value={text} onChange={evt => inputMessage(evt.target.value)} placeholder='Type your message here...' rows={5} />
            <SendMessageButton loading={loading} onClick={sendMessage} />
        </SendMessageContainer>
    )
}

const SendMessageContainer = styled.div`
    padding: 1em;
    
`

interface SendMessageButtonProps {
    loading?: boolean;
    onClick: () => void
}
function SendMessageButton(props: SendMessageButtonProps) {
    const { loading, onClick } = props
    const sendMessageHandler = () => {
        if (!loading) {
            onClick()
        }
    }
    return (
        <PrimaryButton onClick={() => sendMessageHandler()}>
            {
                loading
                    ? <Text>Sending...</Text>
                    : <>
                        <Text styles={"margin-right: 5px;"}>
                            Send Message
                        </Text>
                        <Icon width={20} height={20} color="white" strokeWidth={1}>
                            <GrSend />
                        </Icon>
                    </>
            }
        </PrimaryButton >
    )
}
