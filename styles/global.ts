import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap');

  *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Poppins', 'FontAwesome'
  }

  :root{
      --white: #ffff;
      --black: #0000;
      --gray1: #ededed;
      --gray2: #E7E7E7;
      --gray3: #F0F0F0;
      --gray4: #7C7C8A;
      --gray5: #828388;
      --gray6: #585858;
      --lightBlue1: #f0fcfe;
      --lightBlue2: #b7d9e2;
      --blue1: #86b6c6;
      --blue2: #5c93aa;
      --blue3: #639895;
      --mediumBlue1: #3a728e;
      --darkBlue1: #0c3756;
      --darkBlue2: #1f5372;
  }

  button{
      cursor: pointer;
  }

  a{
      color:inherit;
      text-decoration: none;
  }

  @media (max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  @media (max-width: 1000px){
      html{
          font-size: 93.75%;
      }
  }
`
