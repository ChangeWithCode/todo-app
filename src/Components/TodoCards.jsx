const TodoCards = ({ todo, handleDelete, completeTodo }) => {
    return (
        <>
            {todo && todo.map((obj, index) => {
                return (
                    <>
                       
                        <div className="grid grid-cols-3 gap-1 py-4 bg-blue-100 rounded-lg mb-5"

                            key={index}

                        >
                            <div className="col-span-1 col-start-1 col-end-1 mt-3">
                                <span
                                    className="ml-2 whitespace-nowrap rounded-full bg-black px-2.5 py-0.5 text-sm text-white"
                                >
                                    {obj.isDone ? "Completed" : "Pending"}
                                </span>
                            </div>
                            <div className="col-span-2 col-start-2 col-end-4 mt-3">
                                <p className="text-black text-xl">
                                    {obj.todoInput}
                                </p>
                            </div>
                            <div className="col-span-1 col-start-5 col-end-6">

                                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm mr-2">
                                    <button
                                        className="inline-block border-e p-3 text-black bg-green-300 focus:relative"
                                        title="Edit Product"
                                        onClick={() => completeTodo(obj.isDone , obj)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="black"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        className="inline-block p-3 text-white hover:bg-black focus:relative bg-red-700"
                                        title="Delete Product"
                                        onClick={() => handleDelete(index)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </>
                )
            })}
        </>

    );
}

export default TodoCards;