import React from 'react'

const HeaderComponent = () => {

  return (
    <div>
      <header>
        <nav className='navbar navbar-custom'>
            <div>
              <a href= '/task-management/tasks' className='navbar-brand fw-bolder'> Task Management Application </a>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent