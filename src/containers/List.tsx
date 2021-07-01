import React from "react";
import axios from "axios";

export default class List extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.interceptors.request.use(
  function(changeLang) {
    ...modify code; return changeLang;
  }, 
  function(error) {
    ...return Promise.reject(error);
  }
);
  }

render() {
  return (
    <div className="Listposts">
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};


