import React, { useState } from 'react';
import TaskList from '../TaskList';
import Footer from '../Footer';
import Input from '../Input';
import useTasks from '../../hooks/useTasks';

import styles from './AppMain.scss';

const AppMain = () => {
  const [tasks, activeFilter, {
    handleSubmit,
    deleteTask,
    toggleIsComplete,
    setStatus,
    changeFilter,
    deleteCompleted,
  }] = useTasks();

  const [text, setText] = useState('');

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    handleSubmit(text);
    setText('');
  };

  const itemsLeft = tasks.filter((e) => e.isCompleted === false).length;
  const visibleFooter = !!tasks.length;

  return (
    <section className={styles.todoApp}>
      <form onSubmit={onSubmit}>
        <Input
          required='required'
          value={text}
          handleChange={handleChange}
          className={styles.inputTaskText}
          placeholder="What need to be done?"
          type="text"
        />
      </form>
      <TaskList
        itemsLeft={itemsLeft}
        toggleIsComplete={toggleIsComplete}
        tasks={tasks}
        deleteTask={deleteTask}
        setStatus={setStatus}
      />
      {visibleFooter && (
        <Footer
          deleteCompleted={deleteCompleted}
          activeFilter={activeFilter}
          itemsLeft={itemsLeft}
          changeFilter={changeFilter}
        />)}
    </section>
  );
};

export default AppMain;
