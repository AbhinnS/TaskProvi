package com.example.taskprovi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "taskprovi_task")
public class UserTask {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="title_id")
        private Long task_id;

        @Column(name="user_id")
        private Long userid;

        @Column(name = "title")
        private String title;

        @Column(name = "status")
        private String status;

        //Getter and Setter
        public Long getTaskId(){
            return task_id;
        }

        public void setTaskId(Long task_id){
            this.task_id = task_id;
        }

        public Long getUserId(){
            return userid;
        }

        public void setUserId(Long userid){
            this.userid = userid;
        }

        public String getTitle(){
            return title;
        }

        public void setTitle(String title){
            this.title = title;
        }
        
        public String getStatus(){
            return status;
        }

        public void setStatus(String status){
            this.status = status;
        }
}
