package com.taskmanagementcore.controller;

import com.taskmanagementcore.dto.TaskDto;
import com.taskmanagementcore.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.taskmanagementcore.consonants.TaskConsonants.*;

@RestController
@RequestMapping(BASE_URL)
@AllArgsConstructor
public class TaskController {

    private TaskService taskService;
    @PostMapping(ADD_TASK)
    public ResponseEntity<TaskDto> addTask(@RequestBody TaskDto taskDto){
        TaskDto savedDto = taskService.addTask(taskDto);
        return new ResponseEntity<>(savedDto, HttpStatus.CREATED);
    }
    @GetMapping(GET_TASK_BASED_ON_ID)
    public ResponseEntity<TaskDto> getTask(@PathVariable("id") Long id){
        TaskDto taskDetails = taskService.getTask(id);
        return ResponseEntity.ok(taskDetails);
    }
    @GetMapping(GET_ALL_TASKS)
    public ResponseEntity<List<TaskDto>> getAllTasks(){
        List<TaskDto> allTasks = taskService.getAllTasks();
        //return new ResponseEntity<>(allTasks,HttpStatus.OK);
        return ResponseEntity.ok(allTasks);
    }
    @PutMapping(UPDATE_TASK)
    public ResponseEntity<TaskDto> updateTask(@RequestBody TaskDto taskDto, @PathVariable("id") Long id){
        TaskDto updatedTask = taskService.updateTask(taskDto,id);
        return ResponseEntity.ok(updatedTask);
    }
    @DeleteMapping(DELETE_TASK)
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long id){
        taskService.deleteTask(id);
        return ResponseEntity.ok("Task Number "+id+" deleted successfully!!");
    }
    @PatchMapping(OPEN_TASK)
    public ResponseEntity<TaskDto> openTask(@PathVariable("id") Long id){
        TaskDto openTask = taskService.openTask(id);
        return ResponseEntity.ok(openTask);
    }
    @PatchMapping(IN_PROGRESS_TASK)
    public ResponseEntity<TaskDto> inProgressTask(@PathVariable("id") Long id){
        TaskDto inProgressTask = taskService.inProgressTask(id);
        return ResponseEntity.ok(inProgressTask);
    }
    @PatchMapping(COMPLETED_TASK)
    public ResponseEntity<TaskDto> completeTask(@PathVariable("id") Long id){
        TaskDto completedTask = taskService.completeTask(id);
        return ResponseEntity.ok(completedTask);
    }

}
