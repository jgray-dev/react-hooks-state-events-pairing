import React, { useState } from "react";
import video from "../data/video.js";
import VideoFrame from "./VideoFrame";
import LikeCount from "./LikeCount";
import Comments from "./Comments";
import Header from "./Header";

function App() {
  //console.log("Here's your data:", video);
  const [rating, changeRating] = useState("");
  const [commentVis, showComments] = useState(true);
  const [currentLikes, updateLikes] = useState(video.upvotes);
  const [currentDislikes, updateDislikes] = useState(video.downvotes);

  function handleSubmitRating(newRating) {
    if (rating !== newRating) {
      changeRating(newRating);
      if (newRating === "Liked") {
        updateLikes(currentLikes + 1);
        if (rating === "Disliked") {
          updateDislikes(currentDislikes - 1);
        }
      } else if (newRating === "Disliked") {
        updateDislikes(currentDislikes + 1);
        if (rating === "Liked") {
          updateLikes(currentLikes - 1);
        }
      }
    } else {
      if (rating === "Liked") {
        updateLikes(currentLikes - 1);
      } else if (rating === "Disliked") {
        updateDislikes(currentDislikes - 1);
      }
      changeRating("");
    }
  }

  function handleShowComments(newSetting) {
    showComments(newSetting);
  }

  return (
    <div className="App">
      <VideoFrame video={video} />
      <Header video={video} />
      <LikeCount
        likes={currentLikes}
        dislikes={currentDislikes}
        handleSubmitRating={handleSubmitRating}
        currentRating={rating}
      />
      <Comments
        comments={video.comments}
        commentVis={commentVis}
        handleShowComments={handleShowComments}
      />
    </div>
  );
}

export default App;

//DATA:
//{
//  "id": 1,
//  "title": "React Today and Tomorrow and 90% Cleaner React With Hooks",
//  "embedUrl": "https://www.youtube.com/embed/dpw9EHDh2bM",
//  "views": 730707,
//  "createdAt": "Oct 26, 2018",
//  "upvotes": 9210,
//  "downvotes": 185,
//  "comments": [
//    {
//      "id": 1,
//      "user": "duanebot",
//      "comment": "first!"
//    },
//    {
//      "id": 2,
//      "user": "gaeron",
//      "comment": "What a great tutorial!"
//    }
//  ]
//}
