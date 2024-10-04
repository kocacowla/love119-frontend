import { css } from 'styled-components';

// prettier-ignore
const resetCSS = css`
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
  time, mark, audio, video, button, input, textarea {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, helvetica, Apple SD Gothic Neo, sans-serif;
    font-size: 1.4rem;
    line-height: normal;
    color: var(--color-light-100);
    vertical-align: baseline;
    box-sizing: border-box;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  html,
  body {
    background-color: var(--color-bg);
    -webkit-touch-callout:none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  
  html {
    user-select: none;
    font-size: 10px;
    //-webkit-tap-highlight-color: rgba(255, 255, 255, 0.4);
    -webkit-tap-highlight-color: transparent;
  }

  body {
    line-height: 1;
    max-width: 664px;
    margin: 0px auto;
    -webkit-text-size-adjust: none;
    overscroll-behavior: none;
  }

  // html { font-size: 62.5%; // 1.2rem === 12px }
  /* clears the 'X' from Internet Explorer */
  
  button {
    border: none;
    background: none;
  }

  a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    text-decoration: none;
    color: #000;
  }

  button {
    color: #000;
  }

  b {
    font-weight: bold;
  }

  input[type=search]::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  input[type=search]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  input[type="search"], input[type="text"], input[type="password"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input {
    box-sizing: border-box;
    outline: none !important;
  }

  input,
  select {
    box-sizing: border-box;
    font-size: 16px !important;
  }

  button {
    outline: none;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    width: 100%;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    -ms-user-drag: none;
  }
  
  ::placeholder {
    color: var(--color-light-60);
    font-size: 14px;
  }
`;

export default resetCSS;
