import styleChoose from "./Choose.module.scss";
const Choose = (props) => {
  return (
    <p onClick={props.reg} className={styleChoose.p}>
      {props.add ? "Зарегистрироваться" : "Войти"}
    </p>
  );
};
export default Choose;
