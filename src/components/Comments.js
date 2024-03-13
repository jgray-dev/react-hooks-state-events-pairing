function Comments({ comments, handleShowComments, commentVis }) {
  let displayComments;
  if (commentVis) {
    displayComments = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <h4>{comment.user}</h4>
          <p>{comment.comment}</p>
        </div>
      );
    });
  } else {
    displayComments = "";
  }
  return (
    <>
      <button onClick={() => handleShowComments(!commentVis)}>
        {commentVis ? "Hide Comments" : "Show Comments"}
      </button>
      {displayComments}
    </>
  );
}

export default Comments;
