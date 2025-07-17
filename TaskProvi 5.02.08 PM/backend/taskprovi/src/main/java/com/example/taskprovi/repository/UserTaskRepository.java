package com.example.taskprovi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.taskprovi.model.UserTask;

import jakarta.transaction.Transactional;

public interface UserTaskRepository extends JpaRepository<UserTask, Long> {
    List<UserTask> findByUserid(Long userid);

    @Modifying
    @Transactional
    @Query("UPDATE UserTask t SET t.status = :status WHERE t.task_id = :taskId")
    void updateStatus(@Param("taskId") Long taskId, @Param("status") String status);
    
}
