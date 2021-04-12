import PostFull from "./PostFull/PostFull"
import PostList from "./PostList/PostList"
import { Route } from "react-router"
const Posts = ({ match }) => {
    
    return (
        <div>
            <PostList />
            <Route path="/posts/:id" component={PostFull} />
        </div>
    )
}
export default Posts;

//npm install react router 
