import styled from "@emotion/styled";
import { Heading1, Text } from "../core-ui/text";

interface Props {
    height: number;
}

export function TopNav(props: Props) {
    const { height } = props
    return (
        <TopNavContainer height={height} id="topNav">
            <Heading1>
                1 day chat App
            </Heading1>
            <Text>
                All messages will be deleted at every 00:00 UTC
            </Text>
        </TopNavContainer>
    )
}



const TopNavContainer = styled.div<Props>`
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: ${({ height }) => height}px;
    padding: 0px 0px 0 8px;
`