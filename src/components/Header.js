function Header({ video }) {
  return (
    <div>
      <h4>{video.title}</h4>
      <p>
        {video.views} Views | Uploaded {video.createdAt}
      </p>
      <br></br>
    </div>
  );
}

export default Header;
