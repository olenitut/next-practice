import EventList from "../components/events/EventList/EventList";
import { getFeaturedEvents } from "../data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
