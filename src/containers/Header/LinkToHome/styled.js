import styled from 'styled-components'

let Wrapper = styled.div`
    a{
    text-decoration: none;
    font-weight: bolder;
    color: #ecf0f1;
    font-size: 28px
    &:hover {
        color: #3498db;
        -webkit-transition: color 300ms linear;
        -ms-transition: color 300ms linear;
        transition: color 300ms linear;
        }
    }
`;

export default Wrapper