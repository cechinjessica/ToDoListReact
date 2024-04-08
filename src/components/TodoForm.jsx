import { useState } from 'react'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;

        addTodo(value, category);
        setValue("");
        setCategory("");
    }

    return (
        <div className='todo-form'>
            <h2>New Task:</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Description of your task' onChange={(e) => setValue(e.target.value)} value={value}></input>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value=''>Choose one category</option>
                    <option value='Work'>Work</option>
                    <option value='Studies'>Studies</option>
                    <option value='Personal'>Personal</option>
                </select>
                <button type='submit'> Create</button>
            </form>
        </div>
    )
}

export default TodoForm