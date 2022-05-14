import styled from '@emotion/styled'
import React from 'react'
import { TextAreaInput } from '../../../core-ui/inputs'
import SendMessageButton from './sendMessageButton'

interface Props {
}

function SendMessage(props: Props) {
    // const { height } = props

    return (
        <SendMessageContainer>
            <TextAreaInput placeholder='Type your message here...' rows={5} />
            <SendMessageButton />
        </SendMessageContainer>
    )
}

export default SendMessage

const SendMessageContainer = styled.div`
    padding: 1em;
    
`
