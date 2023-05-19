import * as React from "react";

import AreaStyle from "./TextArea.module.scss";
import Modal from "./modal/Modal";

const TextArea = () => {
  const [text, setText] = React.useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={AreaStyle.component}>
      <input
        onChange={onChange}
        className={AreaStyle.input}
        type="text"
        placeholder="Enter your Email and get notified"
        value={text}
      />
      <Modal text={text} />
    </div>
  );
};

export default TextArea;
