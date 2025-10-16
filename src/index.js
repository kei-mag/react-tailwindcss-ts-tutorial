import { StrictMode } from "react"; // より警告を表示して厳密なルールのもと開発を行う
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const App = () => {
    return (
    <>
    <h1>こんにちは!</h1>
    <p>お元気ですか?</p>
    </>
    )
};

// App関数のコンポーネントをAppタグとして書く。
root.render(<StrictMode>
    <App />
    </StrictMode>
);
