import styled from 'styled-components'

let OrderedListContainer = styled.ol`
    counter-reset: li;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 4em;
    list-style: none;
    *list-style: decimal;
    padding: 0;
    width: 100%;
`

export default OrderedListContainer