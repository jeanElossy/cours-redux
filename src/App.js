import Post from "./component/Post";
import PostForm from "./component/PostForm";
import { useSelector } from "react-redux";
import { isEmpty } from "./component/Utils";
import User from "./component/User";

const App = () => {

  let posts = useSelector((state) => state.postReducer);

  return (
    <div className="App">

      <PostForm />
      <User />
      {!isEmpty(posts) && posts.map((post) => 
        <Post post={post} key={post.id}/>
      )}

    </div>
  );
}

export default App;
