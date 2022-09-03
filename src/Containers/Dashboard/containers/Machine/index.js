import style from "./Machine.module.scss";
import { Title, Span } from "../../../Common";
import ViewButton from "../ViewButton";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/constants";
import { useDispatch } from "react-redux";
import { actions } from "../../../Common/SideBar/store";

function Machine({ machine }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (machineId) => {
    dispatch(actions.VIEW_MACHINE.REQUEST(machineId));
    navigate(ROUTES.PRODUCTS, { replace: true });
  };
  return (
    <div className={style["machine-wrapper"]}>
      <div className={style["machine_info"]}>
        <Title color="white">{machine.nomeMachine}</Title>
        <div className={style["machine_info__detail"]}>
          <Span color="white" size="13px" weight="300" lineHeight="15.73px">
            {machine.azienda}
          </Span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <ViewButton onClick={() => handleClick(machine.idmachine)}>
          View Details
        </ViewButton>
      </div>
    </div>
  );
}

export default Machine;
