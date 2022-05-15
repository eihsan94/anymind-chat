import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

import ChannelNav from "./channelNav";
import UserNav from "./userNav";


interface Props { }

export function SideNav(props: Props) {
    // const {} = props

    return (
        <SideNavContainer id="sideNav">
            <UserNav />
            <ChannelNav />
        </SideNavContainer>
    )
}



const SideNavContainer = styled.div`
    padding: 0px 8px;
    border-right: ${Theme.styles.border};
    height: 100%;
`