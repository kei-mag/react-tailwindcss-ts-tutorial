# react-beginner
Reactについて学ぶための練習用リポジトリ．

テキスト:[【React18対応】モダンJavaScriptの基礎から始める挫折しないためのReact入門 ― Udemy](https://www.udemy.com/course/modern_javascipt_react_beginner/?couponCode=ACCAGE0923) セクション6: Reactの基本を学ぶ & セクション7: Reactを使ってTODOアプリを作成してみよう

# メモ
- Reactの画面を表す関数（コンポーネント）の名前はPascalCase (大文字始まり)。
- 関数等を他ファイルから参照可能にしたい場合には関数名の前に`export`をつける。
- HTMLを返す関数を書く記法を**JSX**という。
- JSXでJSの処理を書く際は必ず`{}`で囲う。
- CSSを定義するときは`style`タグにJavaScriptのオブジェクト`{ ... }`でかく。
- コンポーネントには引数を渡すことができる。この引数をpropsという。propsはJavaScriptオブジェクトとして渡される。
  ```jsx
  const MyComponent = (props) => {
    console.log(`色は${props.color}です。`);
    console.log(`タグ内の文字列はchildrenという引数で受け取ります。`);
    return <p>{props.color}色の{props.children}</p>
  }
  ```
  呼び出し側
  ```jsx
  <MyComponent color="blue">メッセージ</MyComponent>
  ```

## 状態管理
URLのフェッチ結果、ラジオボタンの選択状態、画面の表示内容など、すべてのデータはStateとして管理される必要がある。
Stateの管理にはReactのhooksを使う (`useState`)。

コンポーネントの**最上位で**`useState`関数を呼ぶ。この関数は、1) stateの値 と、 2) stateを更新するための関数 を返す。
```js
const [num, setNum] = useState(0);
```
stateの初期値は`useState`関数の引数で指定できる。

詳細は[App.jsxの6~14行目](src/App.jsx)を見るとわかるが、stateを更新するための関数に変更先の値を入れると更新される。
```js
setNum(num + 1);
setNum(num + 1); // +2になる？ → ならない
```
ただし、この場合は同一関数内でsetNumを2回連続で呼んでも+2にはならない。なぜなら効率化のため、numの値はjsを一通り読み終わった後にバッチ処理で評価されるからだ。(2回目のsetNumの時もnumの値は1回目の変更を反映していないため、実質同じ処理を2回やるようなことになる)  
以下のように、setNumに変更先の値を返す関数を入れると意図通りに動く。
```js
setNum((prev) => prev + 1); // prevは今の値を返す（バッチ処理に影響されない）
setNum((prev) => prev + 1); // prevは先ほどのprev+1を反映しているため、この処理はprev + 2となる。
```

---

# Create React App の使い方ガイド

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) を使用して初期設定されています。

## 利用可能なスクリプト

プロジェクトディレクトリ内では以下のコマンドを実行できます：

### `npm start`

アプリケーションを開発モードで起動します。\
[http://localhost:3000](http://localhost:3000) にアクセスすると、ブラウザでアプリケーションを確認できます。

変更を加えるたびにページが自動的に再読み込みされます。\
コンソールにはリンターによるエラーも表示されます。

### `npm test`

テストランナーをインタラクティブなウォッチモードで起動します。\
[テストの実行方法](https://facebook.github.io/create-react-app/docs/running-tests) に関する詳細は、こちらのセクションをご覧ください。

### `npm run build`

アプリケーションを本番環境向けにビルドし、`build` フォルダに出力します。\
このビルドではReactを本番環境用に最適化し、パフォーマンスを最大限に引き出すように適切にバンドルされます。

ビルド結果は最小化され、ファイル名にはハッシュ値が含まれます。\
これでアプリケーションのデプロイ準備が整いました！

[デプロイメント方法](https://facebook.github.io/create-react-app/docs/deployment) に関する詳細は、こちらのセクションをご覧ください。

### `npm run eject`

**注意：これは一方通行の操作です。一度`eject`を実行すると、元の設定には戻れません！**

ビルドツールや設定の選択に満足できない場合、いつでも`eject`を実行できます。このコマンドを実行すると、プロジェクトからビルド依存関係が削除されます。

代わりに、すべての設定ファイルと間接的な依存関係（webpack、Babel、ESLintなど）が直接プロジェクトにコピーされ、完全な制御が可能になります。`eject`以外のコマンドも引き続き動作しますが、コピーされたスクリプトを参照するようになるため、必要に応じてカスタマイズできます。この段階以降は、完全に自己責任での運用となります。

`eject`を使用する必要はありません。提供されている機能セットは小規模から中規模のデプロイメントに適しており、この機能を必ず使う必要はありません。ただし、このツールがカスタマイズ可能でなければ、有用なツールとは言えないことも理解しています。

## さらに詳しく学ぶ

詳細については、[Create React Appの公式ドキュメント](https://facebook.github.io/create-react-app/docs/getting-started)をご覧ください。

Reactの学習については、[React公式ドキュメント](https://reactjs.org/)を参照してください。
