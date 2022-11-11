import { useEffect } from "react";

const NewPost = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return <div>NewPost</div>;
};

export default NewPost;
