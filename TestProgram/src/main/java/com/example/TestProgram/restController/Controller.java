package com.example.TestProgram.restController;

import com.example.TestProgram.entities.Todo;
import com.example.TestProgram.services.TodoService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class Controller {

    @Autowired
    private TodoService todoService;

    @GetMapping(value = "/getAllTodo")
    public ResponseEntity<?> getAllTodo(){
        List<Todo> list = todoService.getAllTodo();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @PostMapping(value = "/saveTodo")
    public ResponseEntity<?> saveTodo(@RequestBody Todo todo){
        todoService.saveTodo(todo);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @PutMapping(value = "/editTodo")
    public ResponseEntity<?> editTodo(@RequestBody Todo todo){
        todoService.saveTodo(todo);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteTodo")
    public ResponseEntity<?> deleteTodo(@RequestBody Todo todo){
     todoService.deleteTodo(todo);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

    @PostMapping(value = "/saveDone")
    public ResponseEntity<?> saveDone(@RequestBody Todo todo){
        todoService.saveTodo(todo);
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

}
