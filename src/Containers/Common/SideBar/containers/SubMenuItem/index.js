import { Span } from "../../../Span";
import style from "./SubMenuItem.module.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

function SubMenuItem({ to, children }) {
  const url = useLocation();
  const navigate = useNavigate();
  const liClasses = classNames(
    style["submenu-item_wrapper"],
    url.pathname === to ? style["visited"] : ""
  );

  const handleClick = () => {
    navigate(to, { replace: true });
  };
  return (
    <div className={liClasses} onClick={handleClick}>
      <div className={style["menu__item"]}>
        <div>
          <span>{children}</span>
        </div>
        <div>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

export default SubMenuItem;
