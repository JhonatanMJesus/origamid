// import React from 'react';

 const estiloP = {
   color: 'blue',
   fontSize: '4rem',
   border: '2px solid black',
   borderRadius: '8px'
 }

const App = () => {
  return (
//     <React.Fragment></React.Fragment>
     <>
         <h1>App React</h1>
         <p style={estiloP}>Eu sou um parágrafo com estilo dinâmico</p>
     </>
   );
 };

export default App
