package com.example.application;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndPoint {
    private TodoRepository todoRepository;
    TodoEndPoint(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }
    public Todo add(String task) {
        Todo todo = new Todo();
        todo.setTask(task);
        todoRepository.save(todo);
        return todo;
    }
    public Todo update(Todo todo) {
        return todoRepository.save(todo);

    }
}
