import {createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&family=Roboto:wght@100;300;400&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        height:100vh;
        width:100%;
        
    }

    :root {

/* Colors */

--primary-color:#2BAB54;
--white-color:#FFFFFF;

/* Tipography */

--heading-1: 'Roboto', sans-serif, 150px;
--heading-2:'Roboto', sans-serif, 100px;
--heading-3:'Roboto', sans-serif, 56px;
--heading-4:'Roboto', sans-serif, 32px;
--heading-5:'Roboto Condensed', sans-serif, 28px;
--subheading-1:'Roboto', sans-serif, 28px;
--subheading-2:'Roboto Condensed', sans-serif, 14px;
--nav-text:'Roboto Condensed', sans-serif, 16px; 
}


    
`