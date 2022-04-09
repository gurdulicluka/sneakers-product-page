import classes from "./PageContainer.module.css";

const PageContainer = (props) => {
  return <div id={classes.container}>{props.children}</div>;
};

export default PageContainer;
