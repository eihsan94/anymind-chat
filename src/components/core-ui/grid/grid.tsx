import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

export function Grid(props: Props) {
    const { children } = props

    return (
        <GridContainer>
            {children}
        </GridContainer>
    )
}


const GridContainer = styled.div`
    height: 100%;
    
    `
export const Row = styled.div`
    display: flex;
    height: 100%;
`

interface ColProps {
    size: number
}
export const Col = styled.div<ColProps>`
    height: 100%;
    flex: ${({ size }) => size};
`
