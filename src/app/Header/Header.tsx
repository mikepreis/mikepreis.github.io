import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue" ,Arial ,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 36px;
  color: #2C99A7;
  text-align: center;
`

export const Header: FunctionComponent = () => {

return (
    <StyledHeader>
        7Button.com 
    </StyledHeader>
  )
}

export default Header