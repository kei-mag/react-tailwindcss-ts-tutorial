import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// exportタグを書いて他ファイルから参照可能にする
export const App = () => {
    console.log("--- App ---");
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(true);
    const onClickCountUp = () => {
        setNum(num + 1);
        setNum(num + 1); // 2回呼んでも1回しか増えない (Stateの更新はバッチ処理されるため、この行は上と同じ0+1の結果になる)
    };
    const onClickCountUp2 = () => {
        setNum((prev) => prev + 1); // 関数型アップデート: 前の状態を引数として受け取り、新しい状態を返す
        setNum((prev) => prev + 1); // prevには1回目の更新後の状態が入るので、2回呼ぶと2増える
    }
    const onClickToggleMessage = () => {
        setIsShowFace(!isShowFace); // こっちが呼ばれたときに以下の3の倍数の処理で上書きされる場合がある。
    }

    useEffect(() => {
        console.log("--- useEffect ---");
        if (num > 0) {
            if (num % 3 === 0) {
                isShowFace || setIsShowFace(true);
            } else {
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]); // 第2引数に指定した変数が更新されたときに第1引数の関数が実行される (第2引数を空配列にすると最初の1回だけ実行される, 省略すると毎回実行される)
    return (
    <>
    <h1 style={ { color: "red" } }>こんにちは!</h1>
    <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
    <ColorfulMessage color="green">元気です!</ColorfulMessage>
    <button onClick={onClickCountUp}>カウントアップ</button>
    <button onClick={onClickCountUp2}>カウントアップ2</button>
    <p>{num}</p>
    <button onClick={onClickToggleMessage}>on/off</button>
    {isShowFace && <p>ヽ(∴｀┏Д┓´)ﾉ彡</p>}
    </>
    )
};