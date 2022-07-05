import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: 'Noto Sans', sans-serif;
    }

    :root {
        --white: #ffffff;
        --light-gray: #F7F5F2;
        --medium-gray: #D9D9D9;
        --dark-gray: #6F6F6F;
        --pink: #FF6392;
        --yellow: #FFD166;
        --blue: #5AA9E6;
        --green: #06d6a0;
        --dark-blue: #2E294E;
    }

    /* CUSTOM SCROLLBAR */
    ::-webkit-scrollbar {
        width: 14px;
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 14px 14px var(--medium-gray);
        border: solid 4px transparent;
        border-radius: 14px;
    }

    ::-webkit-scrollbar-button {
        display: none;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        box-shadow: inset 0 0 14px 14px var(--pink);
    }

    ::-webkit-scrollbar-track {
        display: none;
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
