import React, { useEffect, useState } from "react";

export default function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("/api/video-info")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>YouTube Video Info</h1>
      {info ? (
        <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
          <p><strong>Title:</strong> {info.title}</p>
          <p><strong>Published Date:</strong> {info.publishedDate}</p>
          <p><strong>Views:</strong> {info.views}</p>
          <p><strong>Likes:</strong> {info.likes}</p>
          <p><strong>Duration:</strong> {info.duration}</p>
          <p><strong>Language:</strong> {info.language}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
            }
