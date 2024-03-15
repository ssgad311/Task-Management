package com.taskmanagementcore.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class TaskDto {

    private Long id;
    private String title;
    private String description;
    private String status;
}
