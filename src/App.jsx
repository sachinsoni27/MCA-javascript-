function App(){
  return <h1> welcome to react js</h1>

}
export default App;

// this is a component in react js    
/*  a function that return a JSX element which is a syntax extension for JavaScript that looks similar to HTML. In this case, the component returns an h1 element 
with the text "welcome to react js". The component is then exported as the default export of the module, allowing it to be imported and used in other parts of the 
application. */
 
// in this function alway    contain only one tags  but you can use multiple tags by wrapping them in a parent tag like div or React.Fragment. For example:
/*
function App(){
  return (
    <div>
      <h1> welcome to react js</h1>
      <p> This is a paragraph.</p>
    </div>
  );
}
*/   

// fragment is a special type of component that allows you to group multiple elements without adding an extra node to the DOM. For example:
/*
function App(){
  return (
    <React.Fragment>
      <h1> welcome to react js</h1>
      <p> This is a paragraph.</p>
    </React.Fragment>
  );
}
*/