import { getEvents } from "../../api/getEvents";
import EventList from "../../components/events/EventList/EventList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";

const AllEventsPage = ({ events }) => {
  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export async function getStaticProps() {
  const data = await getEvents();

  return {
    props: {
      events: Object.values(data),
    },
  };
}

export default AllEventsPage;
