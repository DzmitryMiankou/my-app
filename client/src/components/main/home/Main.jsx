import styleMain from "./Main.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import News from "./news/News";
import { useSelector, useDispatch } from "react-redux";
import { fetchKey } from "./../.././api/dialoguesListUsers";

const Main = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchKey());
  }, [dispatch]);

  console.log(state.dialogListAPI.key);

  return (
    <div className={styleMain.container}>
      <div className={styleMain.about}>
        <h1 className={styleMain.h1}>
          Проект преподавателя истории не об истории
        </h1>
        <Link className={styleMain.link} to="/learning">
          Обучаться
        </Link>
      </div>
      <div className={styleMain.mainBackGraund}></div>
      <News />
    </div>
  );
};

export default Main;
