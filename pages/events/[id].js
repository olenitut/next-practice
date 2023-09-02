import { useRouter } from "next/router";
import { getEventById } from "../../data";

const OneEventPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.id);

  if (!event) {
    return <div>No event found</div>;
  }

  return <div>One Event</div>;
};

export default OneEventPage;
