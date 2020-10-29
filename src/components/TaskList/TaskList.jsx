import React from 'react';

import Card from '../Card';
import ToggleButton from '../ToggleButton';
import Typography from '../Typography';
import Icon from '../Icon';
import List from '../List';
import ToggleAll from '../ToggleAll';

import styles from './TaskList.scss';

const TaskList = ({
  deleteTask,
  setStatus,
  tasks,
  toggleIsComplete,
  itemsLeft,
}) => (
  <section className={styles.main}>
    {!!tasks.length && (
      <ToggleAll
        itemsLeft={itemsLeft}
        toggleIsComplete={toggleIsComplete}/>
    )}
    <List
      data={tasks}
      direction="vertical"
    >{({ id, text, isCompleted }) => <Card className={styles.card}>
      <ToggleButton
        isCompleted={isCompleted}
        setStatus={() => setStatus(id)}
      />
      <Typography className={isCompleted
        ? styles.crossText
        : styles.taskText
      }>
        {text}
      </Typography>
      <Icon
        name="cross"
        className={styles.deleteButton}
        onClick={() => deleteTask(id)}
      />
    </Card>}
    </List>
  </section>
);

TaskList.propTypes = {};

TaskList.defaultProps = {};

export default TaskList;
