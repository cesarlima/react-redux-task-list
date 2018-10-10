import React from 'react'

const TaskList = ({ tasks, markAsCompleted, deleteTask }) => {

    const renderRows = () => {

        return tasks.map(task => (
            <tr key={task.id}>
                <td className={task.completed ? 'markedAsDone' : ''}>{task.title}</td>
                <td>
                    <button className="btn btn-success" onClick={() => markAsCompleted(task.id)}><i className="fa fa-check"></i></button>
                    <button className="btn btn-primary ml-2"><i className="fa fa-edit"></i></button>
                    <button className="btn btn-danger ml-2" onClick={() => deleteTask(task.id)}><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        ))
    }

    return (
        <div className="row mt-5">
            <div className="col-12">
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList
