import { useSelector } from "react-redux";
import Product from "../Routes/Product";
const ProductList = () => {
  const item = useSelector((store) => store.items);
  // console.log("got items", item);
  return (
    <>
      {item.map((items, index) => (
        <Product item={items} key={index} />
      ))}
    </>
  );
};
export default ProductList;
