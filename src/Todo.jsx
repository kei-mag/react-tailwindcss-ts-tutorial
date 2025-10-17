import { useState } from "react";
import "./styles.css";

export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1", "TODOです2"]);
    const [completeTodos, setCompleteTodos] = useState(["TODOでした1", "TODOでした2"]);
    
    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    };

    const onClickAdd = () => {
        if (todoText !== "") {
        const newTodos = [...incompleteTodos, todoText];
        // newTodos.push(todoText); してもいい
        setIncompleteTodos(newTodos);
        setTodoText("");
        }
    }

    return (
        <>
        <div className="input-area">
            <input id="input-field" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
            <button onClick={onClickAdd}>追加</button>
        </div>
        <div className="incomplete-area">
            <p>未完了のTODO</p>
            <ul>
                {incompleteTodos.map((todo) => (
                    <li key={todo}>
                    <div className="list-row">
                        <p>{todo}</p>
                        <button>完了</button>
                        <button>削除</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        <div className="complete-area">
            <p>完了のTODO</p>
            <ul>
                {completeTodos.map((todo) => (
                    <li key={todo}>
                    <div className="list-row">
                        <p>{todo}</p>
                        <button>戻す</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        </>
    );
}