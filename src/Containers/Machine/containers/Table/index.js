import style from "./Table.module.scss";
import { Span } from "../../../Common";

function Table({ children }) {
  return (
    <div className={style["table-wrapper"]}>
      <div className={style["table-header"]}>
        <div>
          <Span weight="500" color="#FFFFFF">
            ID log
          </Span>
        </div>
        <div>
          <Span weight="500" color="#FFFFFF">
            Date
          </Span>
        </div>
        <div>
          <Span weight="500" color="#FFFFFF">
            Time
          </Span>
        </div>
        <div>
          <Span weight="500" color="#FFFFFF">
            Type of operation
          </Span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function TableItem({ Id, Date, Time, operation }) {
  return (
    <div className={style["table-item"]}>
      <div>
        <Span color="#2E3338" size="13px" weight="800" letterSpacing="-0.5px">
          {Id}
        </Span>
      </div>
      <div>
        <Span size="13px" weight="400" letterSpacing="-0.5px">
          {Date}
        </Span>
      </div>
      <div>
        <Span color="#2E3338" size="13px" weight="400" letterSpacing="-0.5px">
          {Time}
        </Span>
      </div>
      <div>
        <div className={style["operation-wrapper"]}>
          <div className={style["operation"]}>
            <Span
              size="13px"
              weight="700"
              color="#FFFFFF"
              letterSpacing="-0.5px"
            >
              {operation}
            </Span>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Table, TableItem };
