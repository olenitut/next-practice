import path from "path";
import fs from "fs";

const handler = (req, res) => {
  const email = req.body;
  const path = path.join(__dirname, "/data/newsletter.js");
  const prevNewsletter = fs.readFileSync(path);

  res.status(201).json({
    status: success,
    data: prevNewsletter,
  });
};

export default handler;
