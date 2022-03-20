import style from "./Dashboard.module.scss";
import { Title, PageTitle } from "../../Containers/Common";
import Machine from "./containers/Machine";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";
import { getAllDeviceInfo } from "./store/selectors";
import { useEffect } from "react";
import { CustomButton } from "../Common";
import AddIcon from "@mui/icons-material/Add";

function Dashboard() {
  const dispatch = useDispatch();
  const { Machines } = useSelector(getAllDeviceInfo());

  useEffect(() => {
    dispatch(actions.GET_DEVICE.REQUEST({}));
  }, [dispatch]);

  const handleAddButton = () => {
    alert("ok");
  };

  return (
    <section className={style["dashboard-wrapper"]}>
      <div className={style["machine-title"]}>
        <PageTitle>
          <Title color="lightBlack">Products etc etc</Title>
        </PageTitle>
        <div>
          <CustomButton onClick={handleAddButton}>
            <div>
              <AddIcon />
            </div>
            <div>Add Machine</div>
          </CustomButton>
        </div>
      </div>
      <div className={style["dashboard-wrapper_content"]}>
        {Machines?.map((machine, index) => (
          <Machine key={index} machine={machine} />
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
