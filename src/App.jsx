import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./newTodoForm";

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
			<ul className="list">
				{todos.length === 0 && "no todos"} {/* short circuiting */}
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<label>
								<input
									type="checkbox"
									checked={todo.completed}
									onChange={(e) =>
										toggleTodo(todo.id, e.target.checked)
									}
								/>
								{todo.title}
							</label>
							<button
								onClick={() => deleteTodo(todo.id)}
								className="btn btn-danger"
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}
