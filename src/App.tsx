import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import ReservationrCard from "./components/ReservationCard";
import "./App.css";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value);

  const customer = useSelector((state: RootState) => state.customer.value);

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationrCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customer.map((customer) => {
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
