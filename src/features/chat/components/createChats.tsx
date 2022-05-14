import { PrimaryButton } from '@/components/core-ui/button'
import Icon from '@/components/core-ui/icons/icons'
import { TextAreaInput } from '@/components/core-ui/inputs'
import { Text } from '@/components/core-ui/text'
import styled from '@emotion/styled'
import { GrSend } from 'react-icons/gr'

interface Props {
}

export function CreateChat(props: Props) {
    // const { height } = props

    return (
        <SendMessageContainer>
            <TextAreaInput placeholder='Type your message here...' rows={5} />
            <SendMessageButton />
        </SendMessageContainer>
    )
}

const SendMessageContainer = styled.div`
    padding: 1em;
    
`

function SendMessageButton(props: Props) {

    return (
        <PrimaryButton>
            <Text styles={"margin-right: 5px;"}>
                Send Message
            </Text>
            <Icon width={20} height={20} color="white" strokeWidth={1}>
                <GrSend />
            </Icon>
        </PrimaryButton >
    )
}
