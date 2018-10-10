import React from 'react'

const TaskForm = ({ handleAdd, handleClear, handleOnChange, title }) => (
    <div role="form" className="form-group">
        <div className="row mt-3">
            <div className="col-12 col-md-9">
                <input className="form-control" value={title} onChange={handleOnChange} placeholder="Default input"></input>
            </div>
            <div className="col-12 col-md-3">
                <button className="btn btn-success" onClick={() => handleAdd(title)}><i className="fa fa-plus"></i></button>
                <button className="btn btn-default ml-2" onClick={handleClear}><i className="fa fa-close"></i></button>
            </div>
        </div>
    </div>
)

export default TaskForm
