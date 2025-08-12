import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";

async function Reservation({ cabin }) {
  const [settings, bookedData] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector cabin={cabin} settings={settings} bookedData={bookedData} />
      <ReservationForm cabin={cabin} />
    </div>
  );
}

export default Reservation;
