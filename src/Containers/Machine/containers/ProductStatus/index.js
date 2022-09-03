import { Title, Span } from "../../../Common";
import style from "./ProductStatus.module.scss";
import classNames from "classnames";

function ProductStatus({ status }) {
  return (
    <div className={style["product-status"]}>
      <Title variant="primary" color="lightBlack">
        Status
      </Title>
      <div className={style["product-status_content"]}>
        {status_type.map((item, index) => {
          let liClasses = classNames(
            style["content__item"],
            index === status ? style["set"] : ""
          );
          return (
            <div className={liClasses}>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const status_type = ["Active", "Deactive", "Under processing"];

export default ProductStatus;
