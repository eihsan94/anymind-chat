import styled from "@emotion/styled";

interface TextProps {
    styles?: string;
}
export const Text = styled.div<TextProps>`
    ${({ styles }) => styles}
`

