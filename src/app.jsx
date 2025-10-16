import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// exportタグを書いて他ファイルから参照可能にする
export const App = () => {
    const [num, setNum] = useState(0);
    const onClickCountUp = () => {
        setNum(num + 1);
        setNum(num + 1); // 2回呼んでも1回しか増えない (Stateの更新はバッチ処理されるため、この行は上と同じ0+1の結果になる)
    };
    const onClickCountUp2 = () => {
        setNum((prev) => prev + 1); // 関数型アップデート: 前の状態を引数として受け取り、新しい状態を返す
        setNum((prev) => prev + 1); // prevには1回目の更新後の状態が入るので、2回呼ぶと2増える
    }
    return (
    <>
    <h1 style={ { color: "red" } }>こんにちは!</h1>
    <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
    <ColorfulMessage color="green">元気です!</ColorfulMessage>
    <button onClick={onClickCountUp}>カウントアップ</button>
    <button onClick={onClickCountUp2}>カウントアップ2</button>
    <p>{num}</p>
    </>
    )
};