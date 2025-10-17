import { useState } from "react";
import "./styles.css";

export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    };

    const onClickAdd = () => {
        addTodo(todoText);
        setTodoText("");
    };

    const addTodo = (todo) => {
        if (todo !== "") {
            const newTodos = [...incompleteTodos, todo];
            // newTodos.push(todoText); してもいい
            // incompleteTodos.push(todoText); だと、配列オブジェクト事態が変わらない（内部状態の変更）のため、うまくstate変化しない。
            setIncompleteTodos(newTodos);
        }
    };

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1); // index番目から1つ削除する
        setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index) => {
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
        setCompleteTodos(newCompleteTodos);
        onClickDelete(index);
    }
    
    const onClickBack = (index) => {
        addTodo(completeTodos[index]);
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        setCompleteTodos(newCompleteTodos);
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
                {incompleteTodos.map((todo, index) => (
                    <li key={todo}>
                    <div className="list-row">
                        <p>{todo}</p>
                        <button onClick={() => onClickComplete(index)}>完了</button>
                        <button onClick={() => {onClickDelete(index);}}>削除</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        <div className="complete-area">
            <p>完了のTODO</p>
            <ul>
                {completeTodos.map((todo, index) => (
                    <li key={todo}> 
                    <div className="list-row">
                        <p>{todo}</p>
                        <button onClick={() => onClickBack(index)}>戻す</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
        </>
    );
}