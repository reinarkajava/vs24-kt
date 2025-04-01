import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";

const Header = () => {
  const { cart, dispatch } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    if (cart.length > 0) {
      setIsModalOpen(true);
    }
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const checkoutHandler = () => {
    dispatch({ type: "RESET_CART" });
    setIsModalOpen(false);
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo}/>
        <h1>React Food Order App</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={openModalHandler}>
          Cart ({cart.length})
        </Button>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        onCheckout={checkoutHandler}
      >
        <h2>Your Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          ))}
        </ul>
        <div className="cart-total">
          Total:{" "}
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}{" "}
          EUR
        </div>
      </Modal>
    </header>
  );
};

export default Header;