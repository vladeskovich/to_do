import React, { useCallback, useReducer, useState } from 'react';
import { ACTIVE, ALL, COMPLETED } from '../constants/filters';
import maxId from '../utils/array';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: maxId(state) + 1,
          text: action.payload,
          isCompleted: false,
        },
      ];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    case 'SET_STATUS':
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return { ...task };
      });
    case 'TOGGLE_ALL': {
      const flag = state.some((task) => !task.isCompleted);
      return state.map((elem) => ({ ...elem, isCompleted: flag }));
    }
    case 'DELETE_COMPLETED':
      return state.filter((task) => !task.isCompleted);
    default:
      return state;
  }
};

const useTasks = (initialValue) => {
  const [tasks, dispatch] = useReducer(reducer, initialValue = []);
  const [filter, setFilter] = useState('ALL');

  const handleSubmit = useCallback((text) => {
    dispatch({ type: 'ADD_TASK', payload: text });
  }, [dispatch]);

  const deleteTask = useCallback((id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  }, [dispatch]);

  const setStatus = useCallback((id) => {
    dispatch({ type: 'SET_STATUS', payload: id });
  }, [dispatch]);

  const toggleIsComplete = useCallback(() => {
    dispatch({ type: 'TOGGLE_ALL' });
  }, [dispatch]);

  const changeFilter = useCallback((id) => {
    setFilter(id);
  }, [dispatch]);

  const deleteCompleted = useCallback(() => {
    dispatch({ type: 'DELETE_COMPLETED' });
  }, [dispatch]);

  let filteredTasks = [];

  switch (filter) {
    case ALL: {
      filteredTasks = [...tasks];
      break;
    }
    case ACTIVE: {
      filteredTasks = tasks.filter((task) => !task.isCompleted);
      break;
    }
    case COMPLETED: {
      filteredTasks = tasks.filter((task) => task.isCompleted);
      break;
    }
    default:
      filteredTasks = [...tasks];
  }

  return [filteredTasks, filter, {
    handleSubmit,
    deleteTask,
    setStatus,
    toggleIsComplete,
    changeFilter,
    deleteCompleted,
  }];
};

export default useTasks;
