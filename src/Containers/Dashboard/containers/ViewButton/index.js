import Button from "@material-ui/core/Button";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { withStyles } from "@material-ui/core/styles";

function ViewButton({ ...props }) {
  return (
    <ButtonStyle
      {...props}
      variant="outlined"
      startIcon={<RemoveRedEyeOutlinedIcon />}
    >
      View Detail
    </ButtonStyle>
  );
}

const ButtonStyle = withStyles({
  root: {
    background: "#409CFF",
    borderRadius: "6px",
    border: 0,
    color: "#FFFFFF",
    height: 27,
    width: 104,
    padding: "10px 2px 9px 6px",
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 600,
    "&:hover": {
      background: "#A9EBFF",
    },
  },
  label: {
    textTransform: "none",
  },
})((props) => <Button {...props} />);

export default ViewButton;
