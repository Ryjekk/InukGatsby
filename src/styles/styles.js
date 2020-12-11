import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
// droid-sans-mono 400
@import url('https://use.typekit.net/eyl0czw.css'); 
// bebas-neue-by-fontfabric 100,200,300,400,700
@import url('https://use.typekit.net/eyl0czw.css'); 
  * {
    border: 0;
    box-sizing: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none; 
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 99;
    position:relative;
  }
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'droid-sans-mono', 'bebas-neue-by-fontfabric', monospace;
  }
  
  body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.heading};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    font-family: 'droid-sans-mono', 'bebas-neue-by-fontfabric', monospace;
  }
  
  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
`;

export default GlobalStyles;
