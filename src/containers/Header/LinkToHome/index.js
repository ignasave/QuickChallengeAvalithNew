import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './styled'

export default function LinkToHome() {
    return (
        <Wrapper>
            <Link to="/">HOME</Link>
        </Wrapper>
    )
}
