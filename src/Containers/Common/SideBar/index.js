import { Title, Span } from "../";
import { Img } from "react-image";
import style from "./SideBar.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ROUTES } from "../../../routes/constants";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getViewMachineId } from "./store/selectors";
import SubMenu from "./containers/SubMenu";

function SideBar() {
  const viewId = useSelector(getViewMachineId());

  return (
    <aside className={style["sidebar-wrapper"]}>
      <Title variant="extra">Backoffice</Title>
      <div className={style["sidebar_account"]}>
        <div className={style["sidebar_account__kingsize"]}>
          <Img src="./kingsize.png" />
        </div>
        <Span weight="500">Admin’s Name & Surname</Span>
      </div>
      <ul className={style["sidebar_menu"]}>
        {Object.keys(ROUTES).map((key, i) =>
          i > 0 && i < 6 ? (
            <MenuList key={key} to={ROUTES[key]}>
              {key}
            </MenuList>
          ) : (
            ""
          )
        )}
      </ul>
      {viewId > 0 ? <SubMenu /> : ""}
    </aside>
  );
}

function MenuList({ children, to }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(to, { relpace: true });
  };
  return (
    <li className={style["sidebar_menu__item"]} onClick={handleClick}>
      <div>
        <Span>{children}</Span>
      </div>
      <div style={{ marginTop: "4px" }}>
        <ArrowForwardIosIcon fontSize="12px" />
      </div>
    </li>
  );
}

export { SideBar };
