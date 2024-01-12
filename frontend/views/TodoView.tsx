import React, {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo";
import {TodoEndPoint} from "Frontend/generated/endpoints";
import {TextField} from "@hilla/react-components/TextField";
import {Button} from "@hilla/react-components/Button";
import {Checkbox} from "@hilla/react-components/Checkbox";
export function TodoView() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');
    useEffect(() => {
        TodoEndPoint.findAll().then(setTodos);
    }, []);

    async function addTodo() {
        const saved =  await TodoEndPoint.add(task);
        if (saved) {
            setTodos([...todos, saved]);
            setTask('');
        }
    }
    function updateTodo (todo: Todo, done: boolean) {
        TodoEndPoint.update({...todo, done}).then(updated => {
            if (updated) {
                setTodos(todos.map(t => t.id === todo.id ? updated : t));
            }
        })
    }
    return <div className="p-m">
        <h1>TodoView</h1>
        <div className="flex gap-s">
            <TextField value={task} onChange={e => setTask(e.target.value)}/>
            <Button theme="primary" onClick={addTodo}>Add</Button>
        </div>
        {todos.map(todo =>(<div key={todo.id}>
            <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo,e.detail.value)}/>
            <span>{todo.task}</span>
        </div>
        ))}
    </div>

}