import styled from '@emotion/styled'
import { useState } from 'react'
import { Text } from '../text'

interface Props { }

const CHANNEL_DATA = [
    { id: 1, name: "General Channel" },
    { id: 2, name: "Technology Channel" },
    { id: 3, name: "LGTM Channel" },
]

function ChannelNav(props: Props) {
    const [currChannelId, setCurrChannelId] = useState(0)
    const goToChannel = (channelId: number) => {
        console.log("go to channel", channelId);
        setCurrChannelId(channelId)
    }

    return (
        <ChannelNavContainer>
            <Text>
                2. Choose your Channel
            </Text>
            <ChannelNavContent>
                {CHANNEL_DATA.map((channel, i) => <ChannelNavItem key={i} onClick={() => goToChannel(channel.id)} isSelected={currChannelId === channel.id}>
                    {channel.name}
                </ChannelNavItem>)}
            </ChannelNavContent>
        </ChannelNavContainer>
    )
}

export default ChannelNav


const ChannelNavContainer = styled.div`
    padding: 1em 0 0 0;
`

const ChannelNavContent = styled.div`
    padding: 1em 0 0 0;
`

interface ChannelNavItemProps {
    isSelected: boolean;
}
const ChannelNavItem = styled.div<ChannelNavItemProps>`
    padding: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color .5s ease;;
    ${({ isSelected }) => `background-color: ${isSelected ? "#FFFFFF" : "none"}`};

`