import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import PageHeader from './components/page-header'
import Menu from './components/menu'
import Task from './task/components/task'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <PageHeader name='Tarefas' small='Cadastro' />
        <Task />
      </div>
    </BrowserRouter>
  )
}

export default App;
