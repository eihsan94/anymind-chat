import styled from '@emotion/styled'
import React from 'react'
import { Text } from '../text'

interface Props {
    image: string;
    name: string;
}

function Avatar(props: Props) {
    const { image, name } = props

    return (
        <AvatarContainer>
            <AvatarImage src={image} />
            <Text styles={"font-size: 12px; color: #A2A4A4;"}>
                {name}
            </Text>
        </AvatarContainer>
    )
}

export default Avatar

const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const AvatarImage = styled.img`
   border-radius: 36px;
   object-fit: cover;
   height: 36px;
   width: 36px;
`