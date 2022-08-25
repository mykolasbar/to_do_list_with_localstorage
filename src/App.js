import ToDoList from './to_do_list';
import Testingjsonserver from './testingjsonserver';
import './to_do_list.css'
import { findByLabelText } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
