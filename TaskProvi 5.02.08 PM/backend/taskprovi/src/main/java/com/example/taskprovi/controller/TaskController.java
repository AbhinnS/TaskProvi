package com.example.taskprovi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.taskprovi.model.UserTask;
import com.example.taskprovi.service.UserTaskService;
import com.example.taskprovi.repository.UserTaskRepository;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") 
public class TaskController {

    @Autowired
    private UserTaskService userTaskService;

    @Autowired
    private UserTaskRepository userTaskRepository;

    @PostMapping
    public UserTask createTask(@RequestBody UserTask userTask) {
        return userTaskService.save(userTask);
    }

    @GetMapping
    public List<UserTask> getAllTasks() {
        return userTaskRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<UserTask> getTasksByUserId(@PathVariable Long userId) {
        return userTaskRepository.findByUserid(userId);
    }

    @PutMapping("/{taskId}/status")
    public void updateTaskStatus(@PathVariable Long taskId, @RequestBody Map<String, String> body) {
        String status = body.get("status");
        userTaskRepository.updateStatus(taskId, status);
    }

    @DeleteMapping("/{taskId}/delete")
    public ResponseEntity<?> deleteTask(@PathVariable Long taskId) {
            userTaskRepository.deleteById(taskId);
            return ResponseEntity.ok().build();
        }

}
