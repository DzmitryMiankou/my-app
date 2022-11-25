import { Outlet, NavLink } from "react-router-dom";

import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "20px",
    listStyle: "none",
    gap: "10px",
  },
  li: {
    textDecoration: "none",
    color: "#3582c5",
    "&:hover": { color: "#dc5b24" },
  },
  active: {
    color: "#dc5b24",
  },
  cont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  svg: {
    fill: "#b65227",
  },
  arrov: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "5%",
  },
  h: {
    color: "#b65227",
  },
});

const Layout = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.cont}>
        <div className={classes.arrov}>
          <h3 className={classes.h}>Пройди путь</h3>
          <svg width="800px" className={classes.svg} viewBox="0 28 300 40">
            <polygon points="271.51 45.12 263.06 40.23 263.96 41.27 273.88 49.19 20.02 49.19 20.02 50.81 273.91 50.81 263.06 59.77 271.51 54.88 279.98 50 271.51 45.12" />
          </svg>
        </div>
        <ul className={classes.container}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.li}`
              }
              to="html"
            >
              HTML
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.li}`
              }
              to="css"
            >
              CSS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classes.active}` : `${classes.li}`
              }
              to="Figma"
            >
              Figma
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
