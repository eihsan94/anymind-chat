import { MockChannelData } from '@/mock/mockChannelData'
import { useChannelContext } from '@/providers/channelProvider'
import styled from '@emotion/styled'
import { Text } from '../core-ui/text'

interface Props { }


function ChannelNav(props: Props) {
    const { currentChannel, assignCurrentChannel } = useChannelContext()
    const goToChannel = (channelId: string) => {
        assignCurrentChannel({ channelId: channelId })
    }

    return (
        <ChannelNavContainer>
            <Text>
                2. Choose your Channel
            </Text>
            <ChannelNavContent>
                {MockChannelData.map((channel, i) => <ChannelNavItem key={i} onClick={() => goToChannel(channel.id)} isSelected={currentChannel.channelId === channel.id}>
                    {channel.name} Channel
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