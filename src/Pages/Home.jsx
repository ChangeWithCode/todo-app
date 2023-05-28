import { useState } from "react";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import toast from 'react-hot-toast';
const Home = () => {


    const [todo, setTodo] = useState([]);
    const [todoInput, setTodoInput] = useState("");
    const [count, setCount] = useState(1);


    //delete 

    const handleDelete = (id) => {

        const newTodos = [...todo];
        newTodos.splice(id,1)
        setTodo(newTodos);
    }


    //add a todo 
    const Addtodo = (todoInput,) => {
        if (todoInput === "") {
            toast.error("Todo cannot be empty")
        }
        else {
            setTodo([...todo, { id: count, todoInput: todoInput, isDone: false }]);
            setTodoInput("");
        }
    }


    //complete a todo 
    const completeTodo = (status, obj) => {

        const newTodos = [...todo];
        obj.isDone = !status;
        setTodo(newTodos);

    }

    return (

        <>
            <TodoInput
                todoInput={todoInput}
                setTodoInput={setTodoInput}
                Addtodo={Addtodo}
                count={count}
                setCount={setCount}
            ></TodoInput>
            <TodoList
                todo={todo}
                handleDelete={handleDelete}
                completeTodo={completeTodo}
            ></TodoList>
        </>

    );
}

export default Home;