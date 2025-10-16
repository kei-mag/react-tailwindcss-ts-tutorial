// exportタグを書いて他ファイルから参照可能にする
export const App = () => {
    const onClickButton = () => alert();
    const contentStyle = {
        color: "blue",
        fontSize: "18px",
        margin: 100
    }
    return (
    <>
    <h1 style={ { color: "red" } }>こんにちは!</h1>
    <p style={contentStyle}>お元気ですか?</p>
    <button onclick={onClickButton}>ボタン</button>
    </>
    )
};