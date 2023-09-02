import { useRouter } from "next/router";
import EventList from "../../components/events/EventList/EventList";
import { getFilteredEvents } from "../../data";

const FilteredPage = () => {
  const router = useRouter();
  const slug = router.query.slug;

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

export default FilteredPage;
