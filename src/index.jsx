import { StrictMode } from "react"; // より警告を表示して厳密なルールのもと開発を行う
import { createRoot } from 'react-dom/client';
import { Todo } from "./Todo"; // Todo.jsからTodo関数をimport

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Todo関数のコンポーネントをTodoタグとして書く。
root.render(<StrictMode>
    <Todo />
    </StrictMode>
);
