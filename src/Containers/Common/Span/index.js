function Span({
  children,
  size = "12px",
  color = "#2E3338",
  weight = "600",
  lineHeight = "14.52px",
  letterSpacing = "0",
}) {
  const style = {
    fontSize: size,
    color: color,
    fontWeight: weight,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
  };

  return <span style={style}>{children}</span>;
}

export { Span };
