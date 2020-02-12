import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;

    --primary-color-dark: #1E1E1E;
    --primary-color: #FFFFFF;
    --secondary-color: #333333;
    --accent-color: #bbbbbb;

    --margin-left: 4.125rem;
    --margin-top: 4rem;
    --margin-horizontal: 5rem;
    --margin-vertical: 5rem;

    --margin-horizontal-mobile: 2rem;
    --margin-vertical-mobile: 2rem;

    --accent-blue: #1C6FA2;
    --highlight-blue: #64abf7;

    --heading-color: #1C6FA2;
    --heading-color-dark: #3B3B3B;
    --heading-color-light: #F3F3F3;

    --text-color: #696969;
    --text-color-dark: #1E1E1E;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    overflow-x: hidden;
    font-size: 1rem;
    line-height: 1.375rem;

    @media screen and (max-width: 767px) {
      line-height: 1.25rem;
    }

    &.no-scroll {
      overflow: hidden;
    }

    &.page-loading {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow-y: hidden;
    }
  }

  h1 {
    color: var(--heading-color-dark);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--heading-color);
  }

  h1 {
    font-size: 3em;
    line-height: 1.05em;
  }

  h2 {
    font-size: 2.25em;
    line-height: 1.25em;
  }

  h3 {
    font-size: 1.75em;
    line-height: 1.25em;
  }

  h4 {
    font-size: 1.125em;
    line-height: 1.22222em;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 2.5em;
      line-height: 1.125em;
    }

    h2 {
      font-size: 2em;
      line-height: 1.25em;
    }

    h3 {
      font-size: 1.5em;
      line-height: 1.25em;
    }

    h4 {
      font-size: 1.125em;
      line-height: 1.22222em;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2em;
      line-height: 1.25em;
    }

    h2 {
      font-size: 1.625em;
      line-height: 1.5384615em;
    }

    h3 {
      font-size: 1.375em;
      line-height: 1.13636364em;
    }

    h4 {
      font-size: 1.125em;
      line-height: 1.1111111em;
    }
  }

  button {
    border-radius: 0;
  }

  p {
    color: var(--text-color);
  }

  ul {
    list-style: disc;
    color: var(--primary-color-dark);

    li {
      padding: 0.25rem 0;
    }
  }

  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`