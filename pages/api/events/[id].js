import { getEvents } from "../../../api/getEvents";

const handler = async (req, res) => {
  const eventId = req.query.id;

  if (req.method === "POST") {
    const newComment = req.body;

    const resp = await fetch(
      `https://next-f9003-default-rtdb.firebaseio.com/events/${eventId}/commments.json`,
      {
        method: "POST",
        body: JSON.stringify(newComment),
      }
    );

    if (resp.status === 200) {
      res.status(201).json({
        status: "success",
        message: "Commnet accepted",
      });
    } else {
      res.status(500).json({
        status: "fail",
        message: "Internal Server Error",
      });
    }

    return;
  }

  const events = await getEvents();
  let comments = {};
  console.log(events);

  if (events[eventId].commments) {
    comments = Object.values(events[eventId].commments).map((el) =>
      JSON.parse(el)
    );
  }

  res.status(200).json({
    status: "success",
    comments,
  });
};

export default handler;
