import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, onChangeEditTodo }) => {
    const [editMode, setEditMode] = useState([]);

    const disableEditMode = (todoId) => {
        let updatedEditMode = editMode.filter(
            (editModeId) => editModeId !== todoId
        );
        setEditMode(updatedEditMode);
    };

    return todos.map((todo) => (
        <div
            key={todo.id}
            className={todo.isComplete ? "todo complete" : "todo"}
        >
            {editMode.some((todoId) => todo.id === todoId) ? (
                <div className="form update">
                    <input
                        className="formInput"
                        value={todo.text}
                        onChange={(event) => onChangeEditTodo(event, todo.id)}
                    />{" "}
                    <button
                        className="btn"
                        onClick={() => disableEditMode(todo.id)}
                    >
                        Update
                    </button>
                </div>
            ) : (
                <>
                    <div
                        className="todoGrow"
                        onClick={() => completeTodo(todo.id)}
                    >
                        {todo.text}
                    </div>
                    <div className="svgs">
                        <TiEdit
                            className="svg"
                            onClick={() => {
                                if (!todo.isComplete)
                                    setEditMode([...editMode, todo.id]);
                            }}
                        />
                        <RiCloseCircleLine
                            className="svg"
                            onClick={() => removeTodo(todo.id)}
                        />
                    </div>
                </>
            )}
        </div>
    ));
};

export default Todo;
