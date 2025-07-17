package com.example.taskprovi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.taskprovi.model.UserTask;
import com.example.taskprovi.repository.UserTaskRepository;

@Service
public class UserTaskService {

    @Autowired
    private UserTaskRepository userTaskRepository;

    public UserTask save(UserTask userTask){
        return userTaskRepository.save(userTask);
    }
}
