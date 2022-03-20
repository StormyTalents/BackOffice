import style from "./Filter.module.scss";
import { Span } from "../../../Common";

function Filter() {
  return (
    <div className={style["filter-wrapper"]}>
      <div className={style["filter_title"]}>
        <Span size="15px" weight="700" letterSpacing="-0.5" lineHeight="18px">
          Filters
        </Span>
      </div>
      <div className={style["filter_content"]}>
        <div>
          <div className={style["filter_option__header"]}>
            <Span color="#FFFFFF">ID log</Span>
          </div>
          <div className={style["filter_option__content"]}>
            <Span color="#E5E5E5">0298612</Span>
          </div>
        </div>
        <div>
          <div className={style["filter_option__header"]}>
            <Span color="#FFFFFF">Date</Span>
          </div>
          <div className={style["filter_option__content"]}>
            <Span color="#E5E5E5">01/12/2021</Span>
          </div>
        </div>
        <div>
          <div className={style["filter_option__header"]}>
            <Span color="#FFFFFF">Time</Span>
          </div>
          <div className={style["filter_option__content"]}>
            <Span color="#E5E5E5">24:00</Span>
          </div>
        </div>
        <div>
          <div className={style["filter_option__header"]}>
            <Span color="#FFFFFF">Type of operation</Span>
          </div>
          <div className={style["filter_option__content"]}>
            <Span color="#E5E5E5">Processing</Span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
