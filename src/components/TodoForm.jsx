import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
            isComplete: false,
        });
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                className="formInput"
                type="text"
                name="text"
                value={input}
                onChange={onChangeInput}
            />
            <button className="btn">Add Todo</button>
        </form>
    );
};

export default TodoForm;
