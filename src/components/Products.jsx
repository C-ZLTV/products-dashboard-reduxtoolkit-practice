import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Product } from "./Product";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const dispatch = useDispatch();

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
      <Container>
        <Row className="justify-content-md-center">{cards}</Row>
      </Container>
    </>
  );
}

export default Products;
