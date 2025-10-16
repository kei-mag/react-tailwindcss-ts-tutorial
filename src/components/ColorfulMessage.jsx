// propsをオブジェクトの分割代入で受け取る
export const ColorfulMessage = ({color, children}) => {
    console.log("--- ColorfulMessage ---");
    const contentStyle = {
        color,
        fontSize: "18px",
    }
    return <p style={contentStyle}>{children}</p>
}