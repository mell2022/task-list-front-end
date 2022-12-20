import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        isComplete: false,
    });

    const submitFormData = (event) => {
        event.preventDefault();

        props.addTaskCallback(formData);
        setFormData({ title: '', isComplete: false });
    };

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form onSubmit={submitFormData}>
            <div>
                <label htmlFor='title'>Title</label>
                <input 
                    name='title'
                    value={formData.title} 
                    onChange={changeHandler} />                
            </div>
            <div>
                <label htmlFor='isComplete'>Is Complete</label>
                <input 
                    name='isComplete' 
                    value={formData.isComplete}
                    onChange={changeHandler} />
            </div>
            <button type='submit'>Add Task</button>
        </form>
    );
};

NewTaskForm.propTypes = {
    addTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;