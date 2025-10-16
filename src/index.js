import { StrictMode } from "react"; // より警告を表示して厳密なルールのもと開発を行う
import { createRoot } from 'react-dom/client';
import { App } from "./App"; // App.jsからApp関数をimport

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// App関数のコンポーネントをAppタグとして書く。
root.render(<StrictMode>
    <App />
    </StrictMode>
);
