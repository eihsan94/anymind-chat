import styled from "@emotion/styled";
import ChannelNav from "./channelNav";
import UserNav from "./userNav";


interface Props { }

function SideNav(props: Props) {
    // const {} = props

    return (
        <SideNavContainer>
            <UserNav />
            <ChannelNav />
        </SideNavContainer>
    )
}

export default SideNav


const SideNavContainer = styled.div`
    padding: 8px;
`