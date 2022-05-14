import styled from "@emotion/styled";
import { ReactNode } from 'react'

interface Props {
    width: number;
    height: number;
    children?: ReactNode;
    color?: string;
    strokeWidth?: number
}


const IconContainer = styled.div<Props>`
display: flex;
align-items: center;
 & svg {
     & path {
        stroke: ${({ color }) => color || "black"};
    }
    stroke-width: ${({ strokeWidth }) => strokeWidth || 0}px;
  ${({ width, height }) => `
     width: ${width}px !important;
     height: ${height}px !important;
   `}
 }

`;

function Icon(props: Props) {
    const { children, ...rest } = props

    return (
        <IconContainer {...rest}>{children}</IconContainer>
    )
}

export default Icon
