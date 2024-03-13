function VideoFrame({ video }) {
  return (
    <iframe
      width="919"
      height="525"
      src={video.embedUrl}
      allowFullScreen
      title="Thinking in React"
    />
  );
}

export default VideoFrame;
