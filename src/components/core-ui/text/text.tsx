import styled from "@emotion/styled";

interface TextProps {
    styles?: string;
    variants?: "ERROR";
}
const textVariantStyle = {
    ERROR: `
        color: red;
        background-color: #F8D7D9;
        font-weight: bold;
    `,
}
export const Text = styled.div<TextProps>`
    ${({ styles }) => styles}
    ${({ variants }) => variants ? textVariantStyle[variants] : ''}
`
