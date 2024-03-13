function Comments({ comments, handleShowComments, commentVis }) {
  let displayComments;
  if (commentVis) {
    displayComments = comments.map((comment) => {
      return (
        <div key={comment.id}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
          <br></br>
          <br></br>
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
      <h2>{commentVis ? `${comments.length} Comments` : ""}</h2>
      {displayComments}
    </>
  );
}

export default Comments;
