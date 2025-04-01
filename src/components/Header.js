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

  // Hinna arvutamine
  const totalPrice = cart
    .reduce((total, item) => {
      // Teha kindlaks kas tegu on numbritega
      const price = Number(item.price); 
      const quantity = Number(item.quantity);
      console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${quantity}`);
      
      if (isNaN(price) || isNaN(quantity)) {
        return total; 
      }
      return total + price * quantity;
    }, 0)
    .toFixed(2);

  console.log('Total Price:', totalPrice);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
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
              {item.name} - {item.quantity} x{" "}
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(item.price)}
            </li>
          ))}
        </ul>
        <div className="cart-total">
          Total:{" "}
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(totalPrice)} 
        </div>
      </Modal>
    </header>
  );
};

export default Header;
