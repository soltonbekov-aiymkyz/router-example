import PostList from "./PostList/PostList"
const Posts =({ match })=> {
    console.log(match)
    return(
        <div>
            <PostList />
        </div>
    )
}
export default Posts;