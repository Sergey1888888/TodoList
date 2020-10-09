import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        setTodos([todo, ...todos]);
    };

    const completeTodo = (todoId) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo = (todoId) => {
        let updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    const onChangeEditTodo = (e, id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = e.currentTarget.value;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="column">
            <h1>Todo List</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                onChangeEditTodo={onChangeEditTodo}
            />
        </div>
    );
};

export default TodoList;
