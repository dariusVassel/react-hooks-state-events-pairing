import video from "../data/video.js";
import React, { useState } from "react"
import VideoContent from "./VideoContent.js";
import CommentList from "./CommentList.js";
import Title from "./Title"

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [hide, setHide] = useState(true)

  function handleUpvote() {
    setUpvotes(upvotes + 1)
  }

  function handleDownvote() {
    setDownvotes(downvotes + 1)
  }

  function handleHide() {
    setHide((hide) => !hide)
  }

  const displayComments = hide ? <CommentList video={video} hide={hide} /> : null

  return (
    <div className="App">
      <VideoContent />
      <Title video={video} upvotes={upvotes} downvotes={downvotes} handleUpvote={handleUpvote} handleDownvote={handleDownvote} handleHide={handleHide} />
      <br /><hr />
      {displayComments}
    </div>
  );
}

export default App;
