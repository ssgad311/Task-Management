package com.taskmanagementcore.service.impl;

import com.taskmanagementcore.dto.TaskDto;
import com.taskmanagementcore.entity.Task;
import com.taskmanagementcore.exception.ResourceNotFoundException;
import com.taskmanagementcore.repository.TaskRepository;
import com.taskmanagementcore.service.TaskService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {

    private TaskRepository taskRepository;
    private ModelMapper modelMapper;
    @Override
    public TaskDto addTask(TaskDto taskDto) {
        //convert task dto into entity
//        Task task = new Task();
//        task.setTitle(taskDto.getTitle());
//        task.setDescription(taskDto.getDescription());
//        task.setStatus(taskDto.getStatus());
        Task task = modelMapper.map(taskDto,Task.class);


        // save entity
        Task savedTask = taskRepository.save(task);

        //convert entity to dto and return it
//        TaskDto savedTaskDto = new TaskDto();
//        savedTaskDto.setId(savedTask.getId());
//        savedTaskDto.setTitle(savedTask.getTitle());
//        savedTaskDto.setDescription(savedTask.getDescription());
//        savedTaskDto.setStatus(savedTask.getStatus());

        return modelMapper.map(savedTask,TaskDto.class);
    }

    @Override
    public TaskDto getTask(Long id) {
        Task taskDetailsBasedOnId = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found with provided id: "+id));
        return modelMapper.map(taskDetailsBasedOnId,TaskDto.class);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();

        return tasks.stream().map((task->modelMapper.map(task,TaskDto.class))).collect(Collectors.toList());
    }

    @Override
    public TaskDto updateTask(TaskDto taskDto, Long id) {

        Task task = taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Task not found with id: "+id));
        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());
        task.setStatus(taskDto.getStatus());

        Task updatedTask = taskRepository.save(task);

        return modelMapper.map(updatedTask,TaskDto.class);
    }

    @Override
    public void deleteTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Task not found with id: "+id));
        taskRepository.delete(task);
    }

    @Override
    public TaskDto openTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Task not found with id: "+id));
        task.setStatus("Open");
        Task savedTask = taskRepository.save(task);
        return modelMapper.map(savedTask,TaskDto.class);
    }

    @Override
    public TaskDto completeTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Task not found with id: "+id));
        task.setStatus("Completed");
        Task savedTask = taskRepository.save(task);
        return modelMapper.map(savedTask,TaskDto.class);
    }

    @Override
    public TaskDto inProgressTask(Long id) {
        Task task = taskRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Task not found with id: "+id));
        task.setStatus("In-Progress");
        Task savedTask = taskRepository.save(task);
        return modelMapper.map(savedTask,TaskDto.class);
    }
}
