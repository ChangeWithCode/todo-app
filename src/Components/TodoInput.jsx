const TodoInput = ({ todoInput, setTodoInput, Addtodo, count, setCount }) => {

    return (
        <div className="mx-auto max-w-screen-xl px-4 mt-24">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                    List Your Tasks Now
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-white ">
                    Simplicity boils down to two steps: Identify the essential. Eliminate the rest.
                </p>

                <div
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg "
                >
                    <p className="text-center text-white text-lg font-medium">Add Your Todo </p>

                    <div>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter your task"
                                value={todoInput}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setTodoInput(e.target.value);
                                }}
                            />


                        </div>
                    </div>


                    <button
                        type="submit"
                        onClick={() => {
                            setCount(count + 1);
                            Addtodo(todoInput)
                        }}
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        Add
                    </button>


                </div>
            </div>
        </div>



    );
}

export default TodoInput;