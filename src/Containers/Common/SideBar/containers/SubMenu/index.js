import SubMenuItem from "../SubMenuItem";
import { Span } from "../../../../Common";
import style from "./SubMenu.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ROUTES } from "../../../../../routes/constants";

function SubMenu() {
  return (
    <div className={style["submenu-wrapper"]}>
      <hr />
      <div className={style["submenu-title"]}>
        <div>
          <Span color="#FFFFFF">PRODUCTS</Span>
        </div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      {SUB_URL.map((url, index) => (
        <SubMenuItem key={index} to={url.to}>
          {url.title}
        </SubMenuItem>
      ))}
    </div>
  );
}

const SUB_URL = [
  { title: "Products", to: "/products" },
  { title: "Orders", to: "/products/orders" },
  { title: "Report of Orders", to: "/products/report_order" },
];

export default SubMenu;
