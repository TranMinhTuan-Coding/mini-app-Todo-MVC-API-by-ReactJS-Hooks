import {useState} from 'react';

function AddNewTodo(props) {
    const [title, setTitle ]=useState("")

    // Hàm thay đổi giá trị của state title thông qua giá trị được nhập ở ô input
    const setStateByInputValue = e => {
        setTitle(e.target.value)
    }

    const addNewItem01 = e => {
        e.preventDefault();
        props.addNewItem02(title);

        setTitle("")
    };

        return(
            <form 
                className="add-todo-box"
                onSubmit={addNewItem01}
            >
                <input 
                        placeholder="what needs to be done ? - Everything must be Perfect!"

                        onChange={setStateByInputValue}
                        value={title}
                />
            </form>
        )

}
export default AddNewTodo;

