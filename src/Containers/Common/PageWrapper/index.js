import style from "./PageWrapper.module.scss";

function PageWrapper({ children }) {
  return <main className={style["page-wrapper"]}>{children}</main>;
}

function PageTitle({ children }) {
  return <div style={{ marginBottom: "54px" }}>{children}</div>;
}

function PageContent({ children }) {
  return <div className={style["page-content"]}>{children}</div>;
}
export { PageWrapper, PageTitle, PageContent };
