import styled from 'styled-components'

let Container = styled.div`
    body {
        background-color: black;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
        sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }

    button:disabled {
        opacity: 0.5;
    }

    html {
        font-size: 100%;
    }

    main{
        padding-bottom: 5px;
    }

`;

export default Container