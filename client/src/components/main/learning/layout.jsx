import { Outlet, NavLink } from "react-router-dom";

import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "12pt",
    listStyle: "none",
    gap: "30px",
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
    alignItems: "end",
    justifyContent: "space-between",
    gap: "20px",
    borderBottom: "#b65227 solid 1px",
    paddingBottom: "10px",
  },
  arrov: {
    display: "flex",
    alignItems: "center",
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
          <h3 className={classes.h}>Пойми просто</h3>
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
