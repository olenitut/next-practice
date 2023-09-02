import EventList from "../../components/events/EventList/EventList";
import { getAllEvents } from "../../data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default AllEventsPage;
