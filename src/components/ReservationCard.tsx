import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/costumerSlice";
import { v4 as uuid } from "uuid";

interface IReservationCardTypes {
  name: string;
  index: number;
}

const ReservationrCard = ({ name, index }: IReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: "uuid()",
            name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationrCard;
