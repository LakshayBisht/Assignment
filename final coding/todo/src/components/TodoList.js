import React from 'react';

const TodoList = ({ todoList }) => {
	return todoList.length ? (
		<div className='todo-list'>
			<p>{todoList.length} Tasks available to do</p>
			<ul>
				{todoList.map((todo) => (
					<li key={todo.id}>{todo.name}</li>
				))}
			</ul>
		</div>
	) : (
		<div className='empty'>No task to read.</div>
	);
};

export default TodoList;
