const handler = async (req, res) => {
  const newComment = req.body;

  await fetch(
    `https://next-f9003-default-rtdb.firebaseio.com/events/${req.query.id}/commments.json`,
    {
      method: "POST",
      body: JSON.stringify(newComment),
    }
  );

  res.end();
};

export default handler;
