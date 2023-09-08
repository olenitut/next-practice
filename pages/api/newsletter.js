const handler = async (req, res) => {
  const email = req.body.email;

  if (email) {
    const resp = await fetch(
      "https://next-f9003-default-rtdb.firebaseio.com/news.json",
      { method: "POST", body: JSON.stringify({ email }) }
    );
    res.status(204).json({
      status: "success",
      data: email,
    });
  }
};

export default handler;
