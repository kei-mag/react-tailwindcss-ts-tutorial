import { ColorfulMessage } from "./components/ColorfulMessage";

// exportタグを書いて他ファイルから参照可能にする
export const App = () => {
    const onClickButton = () => alert();
    return (
    <>
    <h1 style={ { color: "red" } }>こんにちは!</h1>
    <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
    <ColorfulMessage color="green">元気です!</ColorfulMessage>
    <button onclick={onClickButton}>ボタン</button>
    </>
    )
};