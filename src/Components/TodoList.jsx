import TodoCards from "./TodoCards";
import { useState } from "react";
const TodoList = ({ todo, handleDelete, completeTodo }) => {


    const [status, setStatus] = useState(false);

    return (
        <>
            <section className="bg-dark">
                {todo.length == 0 ? null :
                    <div className="mx-auto max-w-screen-xl py-12">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-white ">
                                Your All Todos
                            </h2>
                        </div>

                        <div className="mt-8">

                            <div className="flex justify-center mb-8">
                                <div>
                                    <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                                        <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"

                                            onClick={() => {
                                                setStatus(false);
                                            }
                                            }

                                        >Pending</button>
                                        <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                                            onClick={() => {
                                                setStatus(true);
                                            }
                                            }
                                        >Completed</button>

                                    </span>
                                </div>
                            </div>
                            <TodoCards
                                todo={todo.filter(item => item.isDone == status)}
                                completeTodo={completeTodo}
                                handleDelete={handleDelete}
                            />


                        </div>


                    </div>
                }
            </section>

        </>




    );
}

export default TodoList;