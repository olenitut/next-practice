import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { getAllEvents } from "../../helpers/api-util";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    await fetch("/api/events/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
    });
    fetchCommnets();
  }
  async function fetchCommnets() {
    const events = await getAllEvents();
    if (events.find((el) => el.id === eventId).commments) {
      setComments(
        Object.values(events.find((el) => el.id === eventId).commments).map(
          (el) => JSON.parse(el)
        )
      );
    }
  }

  useEffect(() => {
    fetchCommnets();
  }, []);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
