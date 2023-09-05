import Head from "next/head";
import { getEvents } from "../api/getEvents";
import EventList from "../components/events/EventList/EventList";

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Next Events</title>
      </Head>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const data = await getEvents();

  const featuredEvents = Object.values(data).filter((el) => el.isFeatured);

  return {
    props: {
      featuredEvents: featuredEvents,
    },
  };
}
