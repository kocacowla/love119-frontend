import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

export const GlobalStyle = createGlobalStyle`
  :root {
  
  }
  
  ${resetCSS};
  
  // 백그라운스 스크롤 방지 스타일
  body.__background_scroll_stop {
    overflow: hidden !important;
  }

  .__body_pointer_disabled {
    overflow: hidden;
  }
  

  .win-max-width {
    max-width: 664px;
  }
  
`;

export const GlobalStyleHeight100 = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
`;
