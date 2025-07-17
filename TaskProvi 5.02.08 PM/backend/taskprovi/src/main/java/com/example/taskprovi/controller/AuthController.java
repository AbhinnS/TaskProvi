package com.example.taskprovi.controller;

import com.example.taskprovi.model.User;
import com.example.taskprovi.repository.UserRepository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("Received user: " + user);
        System.out.println("FirstName: " + user.getFirstName());
        System.out.println("LastName: " + user.getLastName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Password: " + user.getPassword());
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginData) {
        System.out.println("Email: " + loginData.getEmail());
        System.out.println("Password: " + loginData.getPassword());
        User user = userRepository.findByEmail(loginData.getEmail());
        if (user != null && user.getPassword().equals(loginData.getPassword())) {
            Map<String, Object> data = new HashMap<>();
            data.put("id", user.getUserId());
            data.put("firstName", user.getFirstName());
            data.put("email", user.getEmail());

            return ResponseEntity.ok(data);
        }
        return ResponseEntity.status(401).body("Invalid email or password");
    }
}
