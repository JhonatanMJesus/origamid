import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  
  return (

    <form>
      <label>
        <input type="radio" value="notebook"/> Notebook
      </label>
      <label>
        <input type="radio" value="smartphone" /> Smartphone
      </label>
    </form>
  )

}

export default App
