import React from "react";
import AppTitle from './AppTitle';
import AddNewTodo from './AddNewTodo';
import TodosList from './TodosList';
import Footer from './Footer';

// import các thư viện cần sử dụng :
import {v4 as uuidv4} from 'uuid';
import {useState, useEffect} from 'react';
import axios from 'axios';

function TodoMVCApp() {
    const [todos, setTodos]=useState({
        todosArray: [],
        itemStatus: "all"
    });

    // Hàm quản lý sự kiện tích checkbox
    // Nhận sự kiện onchange từ ô input, sau đó thay đổi giá trị isCompleted trong state
    const checkboxFunc = (id) => {
        // console.log("Clicked on id: " + id);
        setTodos({
            todosArray: todos.todosArray.map(x => {
                if (x.id === id){
                    x.isCompleted = !x.isCompleted;
                }
                return x;
            })
        })
    }

    // Hàm quản lý chức năng xóa từng todo
    const deleteButtonFunc = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => setTodos({
                    todosArray: [...todos.todosArray.filter(x => x.id !== id)]
                }))
    }

    //Hàm quản lý chức năng clear hết các completed todo
    const clearAllCompletedFunc= () => {
        setTodos({
            todosArray: [...todos.todosArray.filter(x => !x.isCompleted)]
        })
    }

    // Hàm quản lý chức năng thêm
    const addNewItem02 = title => {
        const newItemsGetFromServer = {
                            id: uuidv4(),
                            title: title,
                            isCompleted: false
                        }
        if (title !== "") {
            axios.post("https://jsonplaceholder.typicode.com/todos", newItemsGetFromServer)
                .then (response => {
                    console.log(response.data)
                    setTodos ({todosArray: [...todos.todosArray, newItemsGetFromServer] })
                })
        } else {
            setTodos({
                todosArray: [...todos.todosArray]
            })
        }
    }
    
    // Hàm thay đổi giá trị của state
    const changeStateFunc = (status) => {
        setTodos({
            itemStatus: status
        })
    }

    // Lấy danh sách todos từ server về !
    useEffect(() => {
        const config = {
            params: {
                _limit: 15
        }}
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then (response => {
                setTodos({todosArray: response.data})
            })
    }, [])

    return(
        <div >
                <AppTitle />

                <div className="app-container">
                    <AddNewTodo
                            addNewItem02={addNewItem02}
                    />

                    <TodosList
                            todos={todos.todosArray}
                            checkboxFunc={checkboxFunc}
                            deleteButtonFunc={deleteButtonFunc}
                    />

                    <Footer
                            clearAllCompletedFunc={clearAllCompletedFunc}
                            todosArray={todos.todosArray}
                            changeStateFunc={changeStateFunc}
                    />
                </div>
            </div>
    )
}
export default TodoMVCApp;

// class TodoMVCApp extends React.Component{

    
    
//     render(){
//         let {todos, itemStatus} = this.state;
//         if (itemStatus == "active") {
//             todos = todos.filter(x => !x.isCompleted);

//         } else if (itemStatus =="completed") {
//             todos = todos.filter(x => x.isCompleted);

//         }

//         return(

            
//         )
//     }
// }
// export default TodoMVCApp;