import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/costumerSlice";

interface ICustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: ICustomerCardType) => {
  const dispatch = useDispatch();

  const [costumerFoodInput, setCustomerFoodInput] = useState("");

  const handleAddFood = () => {
    if (!setCustomerFoodInput) return;
    dispatch(
      addFoodToCustomer({
        id,
        food: costumerFoodInput,
      })
    );
    setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={costumerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
          <button onClick={() => handleAddFood()}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
