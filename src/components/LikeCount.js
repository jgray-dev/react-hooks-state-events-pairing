function LikeCount({ likes, dislikes, handleSubmitRating, currentRating }) {
  return (
    <div>
      <button class="likes" onClick={() => handleSubmitRating("Liked")}>
        {currentRating === "Liked" ? <b>Liked ({likes})</b> : `Like (${likes})`}
      </button>
      <button class="dislikes" onClick={() => handleSubmitRating("Disliked")}>
        {currentRating === "Disliked" ? (
          <b>Disliked ({dislikes})</b>
        ) : (
          `Dislike (${dislikes})`
        )}
      </button>
    </div>
  );
}

export default LikeCount;
