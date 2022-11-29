import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入（JavaScriptの機能）
  const { color, message } = props;
  const contentStyle = {
    // 要素名と引数が同名なら要素名の記載を省略できる
    color,
    fontsize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};
