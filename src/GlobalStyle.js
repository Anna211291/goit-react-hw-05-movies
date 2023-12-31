import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  }
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  `;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const LinksStyle = styled.ul`
  display: flex;
  gap: 20px;
  padding: 40px;
  font-size: 22px;
`;
