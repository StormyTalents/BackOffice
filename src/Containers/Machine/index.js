import { Title, Span } from "../Common";
import { useSelector } from "react-redux";
import { getViewMachineId } from "../Common/SideBar/store/selectors";
import { getAllDeviceInfo } from "../Dashboard/store/selectors";
import ProductStatus from "./containers/ProductStatus";
import style from "./Machine.module.scss";
import Filter from "./containers/Filter";
import { Table, TableItem } from "./containers/Table";
import LineChart from "./containers/Chart";

function Products() {
  const value = useSelector(getViewMachineId());
  const { Machines } = useSelector(getAllDeviceInfo());
  let machine;

  if (value > 0) machine = Machines[value - 1];
  else return <Title color="lightBlack">No Machine</Title>;

  return (
    <div className={style["machine-product_wrapper"]}>
      <div className={style["machine-product_info"]}>
        <Title variant="primary">{machine.nomeMachine}</Title>
        <div style={{ paddingTop: "40px", paddingBottom: "16px" }}>
          <Span size="18px">{machine.azienda}</Span>
        </div>
        <Filter />
        <Table>
          <TableItem
            Id="0298612"
            Date="27/02/2022"
            Time="12:40"
            operation="Processing"
          ></TableItem>
          <TableItem
            Id="0298612"
            Date="27/02/2022"
            Time="12:40"
            operation="Processing"
          ></TableItem>
          <TableItem
            Id="0298612"
            Date="27/02/2022"
            Time="12:40"
            operation="Processing"
          ></TableItem>
        </Table>
        <div className={style["chart-container"]}>
          <LineChart />
        </div>
      </div>
      <ProductStatus status={machine.status} />
    </div>
  );
}

export default Products;
