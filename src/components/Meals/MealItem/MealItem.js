import classes from "./MealItem.module.css";
import MealItemForm from "../MealItem/MealItemForm.js";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
          <MealItemForm
            onAddToCart={addToCartHandler}
            id={props.id}
          ></MealItemForm>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
