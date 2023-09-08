import classes from "./comment-list.module.css";

function CommentList({ comments }) {
  if (!comments) return <p>No comments yet</p>;
  return (
    <ul className={classes.comments}>
      {comments.map((el) => {
        return (
          <li key={el.text}>
            <p>{el.text}</p>
            <div>
              By <address>{el.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
