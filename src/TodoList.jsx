import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className="list">
			{todos.length === 0 && "no todos"} {/* short circuiting */}
			{todos.map((todo) => {
				return (
					<TodoItem
						id={todo.id}
						complete={todo.completed}
						title={todo.title}
						key={todo.id}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
}
