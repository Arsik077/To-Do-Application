package com.example.TestProgram.services;

import com.example.TestProgram.entities.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> getAllTodo();
    Todo getTodo(Long id);
    Todo saveTodo(Todo todo);
    void deleteTodo(Todo todo);
}
