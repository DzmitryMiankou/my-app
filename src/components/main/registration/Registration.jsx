import styleRegistration from "./Registration.module.scss";
import React, { useCallback, useState } from "react";
import InputText from "./inputText/InputText";
import { useSelector, useDispatch } from "react-redux";
import {
  nickNameActin,
  emailActin,
  passwordActin,
  registerActin,
  loginActin,
} from "../../redux/register-reducer.ts";
import ButtonBlock from "./button-block/ButtonBlock";

const Registration = (props) => {
  const [add, setAdd] = useState(true);
  const state = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const [get, set] = useState();
  const increaseCounter = useCallback(
    (e, a) => {
      let text = e.target.value;
      dispatch(a(text));
      set("");
    },
    [dispatch]
  );
  return (
    <form className={styleRegistration.container}>
      <>
        <>
          {!add && (
            <InputText
              type={"text"}
              placehold={"Например: Explore23"}
              value={"Nickname"}
              createText={(e) => increaseCounter(e, nickNameActin)}
              valPol={state.nickName}
            />
          )}
        </>
        <InputText
          type={"email"}
          placehold={"Например: explore@gmail.com"}
          value={"Email address"}
          createText={(e) => increaseCounter(e, emailActin)}
          valPol={state.email}
        />
        <InputText
          type={"password"}
          placehold={"Например: 230cd_3rD"}
          value={"Password"}
          createText={(e) => increaseCounter(e, passwordActin)}
          valPol={state.password}
        />
      </>

      <ButtonBlock
        add={add}
        setAdd={setAdd}
        set={set}
        registerActin={registerActin}
        loginActin={loginActin}
        get={get}
        dispatch={dispatch}
      />
    </form>
  );
};

export default Registration;
