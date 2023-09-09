const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email) {
      res.end(422).json({
        status: "fail",
        message: "Invalid input",
      });
      return;
    }

    const resp = await fetch(
      "https://next-f9003-default-rtdb.firebaseio.com/news.json",
      { method: "POST", body: JSON.stringify({ email }) }
    );

    if (resp.status === 200) {
      res.status(201).json({
        status: "success",
      });
    } else {
      res
        .status(500)
        .json({ status: "fail", message: "Internal Server Error" });
    }
  }
};

export default handler;
