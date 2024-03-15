package com.taskmanagementcore.repository;

import com.taskmanagementcore.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
