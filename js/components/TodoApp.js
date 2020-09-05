import TodoFilter from './TodoFilter.js';
import TodoItem from "./TodoItem.js";
class TodoApp{
	#id
	#todoList
	#filter
	#todoListDom
	#todoCountDom

	constructor(todoListDom, todoCountDom, hash) {
		this.#id=0;
		this.#todoList=[];
		this.#todoListDom=todoListDom;
		this.#todoCountDom = todoCountDom;
		this.#filter=hash?.slice(1) || "all";
	}

	changeFilter(hash){
		this.#filter=hash?.slice(1) || "all";
		this.render();
	}

	addTodo(text){
		const todo = {
			id:this.#id++,
			text,
			done: false,
		}
		this.#todoList.push(todo);
		this.render();
	}

	toggleTodo(id){
		this.#todoList=this.#todoList.map(todo=>todo.id===(+id)?{...todo, done:!todo.done}:todo);
		this.render();
	}

	filterTodoList() {
		return this.#todoList.filter( todo => { 
			if (this.#filter === 'completed') {
				return  todo.done 
			} else if (this.#filter === 'active') {
				return !todo.done
			} else {
				return true
			}
		})
	}

	render() {
		const filteredList = this.filterTodoList();
		this.#todoListDom.innerHTML = filteredList.map(todo => TodoItem(todo)).join('')
		this.#todoCountDom.innerHTML = `
			<span class="todo-count">총 <strong>${filteredList.length}</strong> 개</span>
			<ul class="filters">
				${TodoFilter(this.#filter)}
			</ul>
		`;
	}
}

export default TodoApp;