import Header from "./Header";
import ProductView from "./ProductView";
import classes from "./PageContainer.module.css";

const PageContainer = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <ProductView />
    </div>
  );
};

export default PageContainer;
