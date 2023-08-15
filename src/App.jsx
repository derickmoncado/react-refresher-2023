import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./newTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
	const [todos, setTodos] = useState([]);

	// add todo
	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false }
			];
		});
	}

	// toggle todo
	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}

				return todo;
			});
		});
	}

	// delete todo
	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => {
				return todo.id !== id;
			});
		});
	}

	return (
		<>
			<NewTodoForm addTheFreakingTodo={addTodo} />

			<h1 className="header">Todo List</h1>

			<TodoList
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
}
