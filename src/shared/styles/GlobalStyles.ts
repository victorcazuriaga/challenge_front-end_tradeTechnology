import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');


    *{
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing:border-box;
        vertical-align: baseline;

    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        /* display: block; */
    }


    }
    body, #root {
        height:100vh;
        width:100vw;
        
    }

    :root {

/* Colors */

--primary-color:#2BAB54;
--white-color:#FFFFFF;

/* Tipography */

--heading-1: 'Poppins', sans-serif, 150px;
--heading-2:'Poppins', sans-serif, 100px;
--heading-3:'Poppins', sans-serif, 56px;
--heading-4:'Poppins', sans-serif, 32px;
--heading-5:'Poppins ', sans-serif, 28px;
--subheading-1:'Poppins', sans-serif, 28px;
--subheading-2:'Poppins ', sans-serif, 14px;
--nav-text:'Poppins ', sans-serif, 16px; 
}


    
`
