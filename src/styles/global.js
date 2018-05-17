import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Cardo:700&subset=latin-ext');

  html {
    font-size: 62.5%;
  }

  body {
    background: #71d7ed;
    color: #222222;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    font-size: 1.4rem;
    font-weight: 400;
    overflow-y: scroll;
    user-select: none;
  }
`;
