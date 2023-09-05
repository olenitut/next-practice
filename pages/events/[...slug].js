import EventList from "../../components/events/EventList/EventList";
import { getFilteredEvents } from "../../data";

const FilteredPage = ({ slug }) => {
  if (!slug) return <p>Loading</p>;

  const events = getFilteredEvents({
    year: Number(slug[0]),
    month: Number(slug[1]),
  });

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;

  return {
    props: {
      slug,
    },
  };
}

export default FilteredPage;
