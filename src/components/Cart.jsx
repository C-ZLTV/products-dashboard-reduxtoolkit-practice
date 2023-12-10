import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { cart } from "../store/cartSlice";
import { Product } from "./Product";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Cart() {
  const cartProducts = useSelector(cart);

  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  const cards = cartProducts.map((product) => (
    <Product
      key={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      buttonFunction={() => removeFromCart(product)}
      buttonText={"Remove from cart"}
    />
  ));

  return (
    <>
      <h1>Cart</h1>
      <Container>
        <Row className="justify-content-md-center">{cards}</Row>
      </Container>
    </>
  );
}

export default Cart;
