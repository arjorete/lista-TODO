import './styles.css';
import {Todo, TodoList} from './classes';        //importamos todos los archivos desde el index.js de la carpeta
import {crearTodoHtml, imprimirFaltantes} from './js/componentes';

export const todoList = new TodoList();     //se crea una instancia de lista todo

todoList.todos.forEach(todo => crearTodoHtml(todo));

imprimirFaltantes();