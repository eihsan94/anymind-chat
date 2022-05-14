import styled from '@emotion/styled'

interface Props {
    Icon: JSX.Element
    onClick: () => void
}

export function IconButton(props: Props) {
    const { Icon, onClick } = props

    return (
        <IconButtonContainer onClick={onClick}>
            {Icon}
        </IconButtonContainer>
    )
}

const IconButtonContainer = styled.button`
    cursor: pointer;
    border:none;
    background-color:transparent;
`