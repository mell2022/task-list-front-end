import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {

  const onCompleteButtonClick = () => {
    const updatedTask = {
      key: props.id,
      id: props.id,
      title: props.title,
      isComplete: !props.isComplete,
      onUpdateTasks: props.onUpdateTasks
    };

    props.onUpdateTasks(updatedTask);
  };

  const completionStyling = props.isComplete ? 'tasks__item__toggle--completed' : 'tasks__item__toggle';

  return (
    <li className="tasks__item">
      <button className={completionStyling} onClick={onCompleteButtonClick}>{props.title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdateTasks: PropTypes.func.isRequired
};

export default Task;
