import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Product } from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../store/productSlice";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();
  const { data } = useSelector(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    //dispatch the action
    dispatch(add(product));
  };

  const cards = data.map((product) => (
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
      <Container>
        <Row className="justify-content-md-center">{cards}</Row>
      </Container>
    </>
  );
}

export default Products;
