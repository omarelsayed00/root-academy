import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobaleStyle = createGlobalStyle`
  ${reset}



  
  :root {
    --primary-color: #1B914B;
    --secondary-corlor: #A090FF;
    --light-color:#F7F5FF;

    
}
  html {
    box-sizing: border-box;
    //overflow-y: hidden;
    
  }

  *, *::after, *::before {
    box-sizing: inherit
  }

  body {
    font-family: "Arb-Regular";
    height: 100%
  }


  button, input,textarea,select {
  font-family: "Arb-Regular";
 }


 .fixed-content {
    top: 0;
    bottom:0;
    position:fixed;
    overflow-y:scroll;
    overflow-x:hidden;
}

.largeSpinner {
   width: 88px;
   height: 88px;
   border-radius: 50%;
   background: radial-gradient(farthest-side,#dedcdc 94%,#0000) top/14.1px 14.1px no-repeat,
          conic-gradient(#0000 30%,#dedcdc);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 14.1px),#000 0);
   animation: spinner-c7wet2 1s infinite linear;
}

@keyframes largeSpinner-c7wet2 {
   100% {
      transform: rotate(1turn);
   }
}

.spinner {
  width: 24px;
   height: 24px;
   border-radius: 50%;
   background: radial-gradient(farthest-side,#dedcdc 94%,#0000) top/3.8px 3.8px no-repeat,
          conic-gradient(#0000 30%,#dedcdc);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3.8px),#000 0);
   animation: spinner-c7wet2 1s infinite linear;
}


@keyframes spinner-c7wet2 {
   100% {
      transform: rotate(1turn);
   }
}


.uploadPicturesWrapper div {
  justify-content: flex-start !important;
}

.uploadPictureContainer {
  width: 200px !important;
  height: auto !important;
  margin: 2% 5% !important;
  padding: 10px !important;
}

.uploadPictureContainer img {
  height: 200px !important;
}

::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  .field.error {
  border: 2px solid red;
  //border-radius: 3px;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}


.loading {
  position: absolute;
  width: 80px; /* Adjust the size as needed */
  height: 90px; /* Adjust the size as needed */
  background-image: url("/loading.svg");
  background-size: 80px;
  animation: breathe 2s infinite ease-in-out;
  right: "50%";
  top: "50%"
 
    }


    @keyframes breathe {
  0% {
    transform: scale(1); /* Initial scale */
    opacity: 0.8; /* Initial opacity */
  }
  50% {
    transform: scale(1.3); /* Slightly larger scale */
    opacity: 1; /* Maximum opacity */
  }
  100% {
    transform: scale(1); /* Back to the initial scale */
    opacity: 0.8; /* Back to the initial opacity */
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}

`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-inline: 0px;
  margin: 0 auto;
  //margin-bottom: 16px;
`;
