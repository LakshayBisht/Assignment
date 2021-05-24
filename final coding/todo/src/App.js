import React, { useState } from 'react';
import uuid from 'uuid/v4';
import InputForm from './components/InputForm';
import Nav from './components/Nav';
import TodoList from './components/TodoList';

function App() {
	const [todoList, setTodoList] = useState([]);
	const addTodoHandler = (todo) => {
		const newTodo = { id: uuid(), name: todo };
		setTodoList((prev) => [...prev, newTodo]);
	};
	return (
		<div className='App'>
			{/* <h1>TODO APP</h1> */}
			<Nav />
			<InputForm addTodoHandler={addTodoHandler} />
			<TodoList todoList={todoList} />
		</div>
	);
}

export default App;
