function App() {
  const students = [
    { id: 1, name: 'sachin' },
    { id: 2, name: 'tanya' },
    { id: 3, name: 'shivang' }
  ];

  return (
    <div>
      {students.map((student) => (
        <h1 key={student.id}>{student.name}</h1>
      ))}
    </div>
  );
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

//also use arrow function to define the component like this:
/*
const App = () => {
  return (
    <div>
      <h1> welcome to react js</h1>
      <p> This is a paragraph.</p>
    </div>
  );
}
*/

//default export is a way to export a single value or function from a module, allowing it to be imported without using curly braces. For example, in this case, the App component is exported as the default export of the module, allowing it to be imported and used in other parts of the application like this:
/*
import App from './App';
*/        


//or components that not default export, you can use named exports like this:
/*
export const App = () => {
  return (
    <div>
      <h1> welcome to react js</h1>
      <p> This is a paragraph.</p>
    </div>
  );
}
*/

//and import it like this:
/*
import { App } from './App';
*/

//array   m key value pair  use for map function in react js using array like this: example:            
/*export default function App() {
  let listInfo=[ "java", "python", "c++", "c#", "javascript"];
  return (
    <div>
      <h1>Welcome to React JS</h1>
      
  listInfo.map((value,index) => {
      return <p key={index}>{value}</p> 

      })}
    </div>
  );
} */


/*const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];
*/

