import { useRouter } from "next/router";
import { getEventById } from "../../data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEvents } from "../../api/getEvents";

const OneEventPage = ({ event }) => {
  if (!event) {
    return <div>No event found</div>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.id;

  const data = await getEvents();
  const event = data[id];

  if (!event) return { notFound: true };

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths() {
  const data = await getEvents();
  const paths = Object.keys(data).map((el) => ({ params: { id: el } }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default OneEventPage;
