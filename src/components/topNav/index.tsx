import styled from "@emotion/styled";
import { Heading1, Text } from "../text";


function TopNav() {

    return (
        <TopNavContainer>
            <Heading1>
                1 day chat App
            </Heading1>
            <Text>
                All messages will be deleted at every 00:00 UTC
            </Text>
        </TopNavContainer>
    )
}

export default TopNav


const TopNavContainer = styled.div`
    background: #FFFFFF;
    padding: 8px 8px 1em 8px;
`