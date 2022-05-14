import styled from '@emotion/styled'
import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

function Grid(props: Props) {
    const { children } = props

    return (
        <GridContainer>
            {children}
        </GridContainer>
    )
}

export default Grid

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
