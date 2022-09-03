import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import style from "./CustomButton.module.scss";

function CustomButton({ ...props }) {
  return (
    <ButtonStyle {...props} variant="outlined">
      <div className={style["button-content"]}>{props.children}</div>
    </ButtonStyle>
  );
}

const ButtonStyle = withStyles({
  root: {
    background: "#03c04a",
    borderRadius: "6px",
    border: 0,
    color: "#FFFFFF",
    height: 27,
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: 600,
    "&:hover": {
      background: "#3ded97",
    },
  },
  label: {
    textTransform: "none",
  },
})((props) => <Button {...props} />);

export { CustomButton };
