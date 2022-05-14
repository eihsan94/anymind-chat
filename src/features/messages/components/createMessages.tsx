import { PrimaryButton } from '@/components/core-ui/button'
import Icon from '@/components/core-ui/icons/icons'
import { TextAreaInput } from '@/components/core-ui/inputs'
import { Text } from '@/components/core-ui/text'
import { useChannelContext } from '@/providers/channelProvider'
import { useDraftContext } from '@/providers/draftsProvider'
import { useMessageContext } from '@/providers/messageProvider'
import { useUserContext } from '@/providers/userProvider'
import { AlertError } from '@/utils/errorAlertUtils'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { GrSend } from 'react-icons/gr'
import { usePostMessage } from '../api/postMesage'
import { Draft } from '../types'

interface Props {
}

export function CreateMessage(props: Props) {
    const { currentChannel } = useChannelContext()
    const { currentUser } = useUserContext()
    const { postMessage, loading } = usePostMessage()
    const { addUnsentMessage } = useMessageContext()
    const { drafts, addDraft, removeDraft, updateDraft } = useDraftContext()
    const [currDraft, setCurrDraft] = useState<Draft | undefined>()
    const inputMessage = (typedText: string) => {
        const newDraft: Draft = {
            text: typedText,
            messageId: currDraft?.messageId || "",
            channelId: currentChannel.channelId,
            userId: currentUser.userId,
        }
        if (currDraft) {
            updateDraft(newDraft)
        } else {
            addDraft(newDraft)
        }
        setCurrDraft(newDraft)
    }

    const sendMessage = async () => {
        try {
            await postMessage({ variables: { text: currDraft?.text, channelId: currentChannel.channelId, userId: currentUser.userId } })
            if (currDraft) {
                removeDraft(currDraft)
            }
        } catch (error: any) {
            addUnsentMessage({ text: `${currDraft?.text}`, channelId: currentChannel.channelId, userId: currentUser.userId, messageId: "", datetime: (new Date().toISOString()) })
            AlertError(error)
        }
    }
    useEffect(() => {
        setCurrDraft(drafts.find(d => d.channelId === currentChannel.channelId && d.userId === currentUser.userId))
    }, [currentChannel.channelId, currentUser.userId, drafts])

    return (
        <SendMessageContainer>
            <TextAreaInput value={currDraft ? currDraft.text : ""} onChange={evt => inputMessage(evt.target.value)} placeholder='Type your message here...' rows={5} />
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
