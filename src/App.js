import React, { useEffect, useState } from "react";
import Video from "./components/Video";
import "./App.css";
import Axios from "./components/axios";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await Axios.get("/v2/posts");
      setPosts(response.data);
      // this will stop the function from firing
      return response;
    }
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div className="app">
      {/* appContainer */}
      {/* Video */}
      {/* Video */}
      {/* Video */}
      {/* Video */}
      <div className="app__videos">
        {posts.map(
          ({ url, channel, song, likes, messages, description, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              comments={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
      {/* Video Footer  */}
      {/* Video Sidebar */}
    </div>
  );
}

export default App;
