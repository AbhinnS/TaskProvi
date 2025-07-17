package com.example.taskprovi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.taskprovi.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    User findByEmail(String email);
}
