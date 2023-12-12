import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
// import { products, status } from "../store/productsSlice";
import { add } from "../store/cartSlice";
import StatusCode from "../utils/statusCode";
import {
  selectAllProducts,
  statusSelector,
  getProducts,
  setAllSkins,
} from "../store/productsSlice";

function Products() {
  const dispatch = useDispatch();

  const status = useSelector(statusSelector);
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    if (status === StatusCode.IDLE) {
      dispatch(getProducts());
    }
  }

  if (status === StatusCode.LOADING) {
    return (
      <>
        <h1>Loading..</h1>
      </>
    );
  }

  if (status === StatusCode.ERROR) {
    return (
      <>
        <h1>Error Ocurred</h1>
      </>
    );
  }
  const addToCart = (product) => {
    //dispatch the action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <Product
      key={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      buttonFunction={() => addToCart(product)}
      buttonText={"Add to cart"}
    />
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <button
        onClick={() => {
          dispatch(setAllSkins([]));
          console.log(products);
        }}
      >
        Change Data
      </button>
      <Container>
        <Row className="justify-content-md-center">{cards}</Row>
      </Container>
    </>
  );
}

export default Products;
