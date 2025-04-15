const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client", "build")));

// Sample Video API route
app.get("/api/video-info", (req, res) => {
  res.json({
    title: "Sample Video",
    publishedDate: "2023-01-01",
    views: 123456,
    likes: 7890,
    duration: "10:23",
    language: "English",
  });
});

// Sample Channel API route
app.get("/api/channel-info", (req, res) => {
  res.json({
    channelName: "Sample Channel",
    subscribers: "1.2M",
    monetized: true,
    creationDate: "2015-05-20",
    country: "US"
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));