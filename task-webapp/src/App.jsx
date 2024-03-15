import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTasksComponent from './TaskComponents/ListTasksComponent'
import TaskComponent from './TaskComponents/TaskComponent'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path = '/task-management/tasks' element={<ListTasksComponent />}></Route>
          <Route path = '/task-management/tasks/add-task' element={<TaskComponent/>}></Route>
          <Route path = '/task-management/tasks/update-task/:id' element={<TaskComponent/>}></Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>    
    </>
  )
}

export default App
