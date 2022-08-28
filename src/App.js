import ToDoList from './to_do_list';
import About from './about';
import Header from './header';
import './to_do_list.css'
import { findByLabelText } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
<body>
  <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path='/to_do_list' element={<ToDoList/>} />
          <Route path='/about' element={<About />} />
        </Routes>
  </BrowserRouter>
</body>
  );
}

export default App;
