import React from 'react'
import { PrimaryButton } from '../../../core-ui/button'
import Icon from '../../../core-ui/icons'
import { GrSend } from 'react-icons/gr';
import { Text } from '../../../core-ui/text';

interface Props {
}

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

export default SendMessageButton
