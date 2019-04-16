import styled from 'styled-components'

let ListElementContainer = styled.li`
    a{background: white;
    border-radius: 30px;
    color: black;
    display: block;
    font-weight: bold;
    margin: .5em 0;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    text-align: center;
    text-decoration: none;

    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    &:hover{
        background-color: #16a085;
        transition: background-color 200ms linear;
        -webkit-transition: background-color 200ms linear;
        -ms-transition: background-color 200ms linear;
    
        color: white;
        transition: color 200ms linear;
        -webkit-transition: color 200ms linear;
        -ms-transition: color 200ms linear;
        }
    }
`

export default ListElementContainer