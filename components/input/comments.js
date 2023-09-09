import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const [comments, setComments] = useState();

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

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

  const fetchCommnets = async () => {
    const res = await fetch(`/api/events/${eventId}`);
    const data = await res.json();

    if (data.comments) {
      setComments(data.comments);
    }
  };

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
