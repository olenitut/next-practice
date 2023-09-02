import EventList from "../../components/events/EventList/EventList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "../../data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export default AllEventsPage;
