import React, { useState } from "react";
import video from "../data/video.js";
import VideoFrame from "./VideoFrame";
import LikeCount from "./LikeCount";
import Comments from "./Comments";

function App() {
  //console.log("Here's your data:", video);
  const [rating, changeRating] = useState("");
  const [commentVis, showComments] = useState(true);

  function handleSubmitRating(newRating) {
    if (rating !== newRating) {
      changeRating(newRating);
      if (newRating === "Liked") {
        video.upvotes++;
        if (rating === "Disliked") {
          video.downvotes--;
        }
      } else if (newRating === "Disliked") {
        video.downvotes++;
        if (rating === "Liked") {
          video.upvotes--;
        }
      }
    } else {
      if (rating === "Liked") {
        video.upvotes--;
      } else if (rating === "Disliked") {
        video.downvotes--;
      }
      changeRating("");
    }
  }

  function handleShowComments(newSetting) {
    showComments(newSetting);
  }

  return (
    <div className="App">
      <VideoFrame />
      <LikeCount
        likes={video.upvotes}
        dislikes={video.downvotes}
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
