import React, { useState } from 'react';

const InputForm = ({ addTodoHandler }) => {
	const [input, setInput] = useState('');
	const submitTodo = (e) => {
		addTodoHandler(input);
		setInput('');
		e.preventDefault();
	};
	return (
		<form onSubmit={submitTodo}>
			<p>
				<label htmlFor='new-todo-input'>Add new Task</label>
			</p>
			<input
				type='text'
				name='new-todo-input'
				id='new-todo-input'
				className='input input__lg'
				required
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<input type='submit' value='Add' />
		</form>
	);
};

export default InputForm;
