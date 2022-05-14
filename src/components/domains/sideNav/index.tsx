import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";
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
    padding: 0px 8px;
    border-right: ${Theme.styles.border};
    height: 100%;
`