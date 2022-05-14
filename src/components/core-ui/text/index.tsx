import styled from "@emotion/styled";

export const Heading1 = styled.div`
    font-weight: bold;
    font-size: 1.15em;
    line-height: 150%;
`
export const Heading2 = styled.div`
    font-weight: bold;
`
interface TextProps {
    styles?: string;
}
export const Text = styled.div<TextProps>`
    ${({ styles }) => styles}
`

