import React, { useEffect, useState } from 'react'
import { completeTask, deleteTask, getAllTasks, inProgressTask } from './TaskService'
import { useNavigate } from 'react-router-dom'

const ListTasksComponent = () => {    

    const [tasks,setTasks] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
        listAllTasks()
    },[])

    const listAllTasks = () =>{
        getAllTasks().then((response)=>{
           setTasks(response.data);
        }).catch(error =>{
            console.error(error);
        })
    }
    
    const addNewTask = () => {
        navigator('/task-management/tasks/add-task')
    }

    const updateTask = (id) => {
        console.log(id)
        navigator(`/task-management/tasks/update-task/${id}`)
    }

    const removeTask = (id) => {
        deleteTask(id).then((response) =>{
            listAllTasks()
        }).catch(error =>{
            console.error(error);
        })
    }

    const moveTaskToInprogress = (id) => {
        inProgressTask(id).then((response)=>{
            listAllTasks()
        })
    }

    const moveTaskToComplete = (id) => {
        completeTask(id).then((response)=>{
            listAllTasks()
        })
    }

    
  return (
    <div className='container'>
        <h2 className='text-center'>List of Tasks</h2>
        <div>
            <button className="button button-custom"  onClick={addNewTask}> Add Task </button>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        tasks.map(task=>
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.status}</td>
                                <td>
                                    <div>
                                        <button className="button button-custom"  onClick={() => updateTask(task.id)}> Update </button> 
                                        <button className="button button-custom"  onClick={() => removeTask(task.id)} style={{marginLeft:'10px'}}> Delete </button>  
                                        <button className="button button-custom"  onClick={() => moveTaskToInprogress(task.id)} style={{marginLeft:'10px'}}> In Progress </button>
                                        <button className="button button-custom"  onClick={() => moveTaskToComplete(task.id)} style={{marginLeft:'10px'}}> Complete </button>                                    
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>                             
            </table>
        </div>
    </div>
  )
}

export default ListTasksComponent