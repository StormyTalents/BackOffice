function Title({ children, variant = "default", color = "default" }) {
  const style = {
    fontWeight: 700,
    letterSpacing: variant !== "extra" ? "-0.41px" : "",
    fontStyle: "normal",
    lineHeight:
      variant === "primary"
        ? "54.46px"
        : variant === "secondary"
        ? "48.41px"
        : "29.05px",
    fontSize:
      variant === "primary"
        ? "45px"
        : variant === "secondary"
        ? "48px"
        : variant === "extra"
        ? "40px"
        : "24px",
    color:
      color === "black"
        ? "#000000"
        : color === "blue"
        ? "#0500EA"
        : color === "white"
        ? "#FFFFFF"
        : color === "lightBlack"
        ? "#959595"
        : "#2E3338",
  };
  return <h1 style={style}>{children}</h1>;
}

export { Title };
