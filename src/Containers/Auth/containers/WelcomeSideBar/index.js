import style from "./WelcomeSideBar.module.scss";

function WelcomeSideBar() {
  return (
    <aside className={style["sidewrapper"]}>
      <div className={style["sidewrapper-content"]}>
        <div className={style["content__title"]}>
          <h1 className={style["title-header"]}>Lorem ipsum</h1>
          <div style={{ paddingTop: "40px" }}>
            <span className={style["title-content"]}>
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod
            </span>
          </div>
        </div>
        <Bubbles variant="top" />
        <Bubbles variant="middle" />
      </div>
    </aside>
  );
}

function Bubbles({ variant = "top" }) {
  const innerStyle = {
    position: "absolute",
    top: variant === "top" ? "-107px" : "375px",
    right: variant === "top" ? "-70px" : variant === "middle" ? "inherit" : "",
    left: variant === "middle" ? "-125px" : variant === "top" ? "inherit" : "",
  };
  if (variant === "top")
    return (
      <div style={innerStyle}>
        <div className={style["bubble-container"]}>
          <div className={style["bubble__item"]} />
          <div className={style["bubble__item"]} />
          <div className={style["bubble__item"]} />
        </div>
      </div>
    );
  else
    return (
      <div style={innerStyle}>
        <div className={style["bubble-container"]}>
          <div className={style["bubble__item"]} />
          <div className={style["bubble_middle__item"]} />
          <div className={style["bubble_middle__item"]} />
        </div>
      </div>
    );
}

export default WelcomeSideBar;
