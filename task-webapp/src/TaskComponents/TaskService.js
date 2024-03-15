import axios, { Axios } from "axios";

const BASE_TASK_MANAGEMENT_URL = "http://localhost:8080/api/tasks";
const GET_ALL_TASKS = "/get-all-tasks";
const ADD_TASK = "/add-task";
const GET_TASK = "/get-task/";
const UPDATE_TASK = "/update-task/";
const DELETE_TASK = "/delete-task/";
const INPROGRESS_TASK = "/in-progress-task/";
const COMPLETE_TASK = "/complete-task/";

export const getAllTasks = () => axios.get(BASE_TASK_MANAGEMENT_URL+GET_ALL_TASKS);
export const addTask = (task) => axios.post(BASE_TASK_MANAGEMENT_URL+ADD_TASK,task);
export const getTask = (id) => axios.get(BASE_TASK_MANAGEMENT_URL+GET_TASK+id);
export const updateTask = (id, task) => axios.put(BASE_TASK_MANAGEMENT_URL+UPDATE_TASK+id,task);
export const deleteTask = (id) => axios.delete(BASE_TASK_MANAGEMENT_URL+DELETE_TASK+id);
export const inProgressTask = (id) => axios.patch(BASE_TASK_MANAGEMENT_URL+INPROGRESS_TASK+id);
export const completeTask = (id) => axios.patch(BASE_TASK_MANAGEMENT_URL+COMPLETE_TASK+id);