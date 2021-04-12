import {Link} from "react-router-dom"
const PostList =()=> {
    const results =[];
    for(let i = 1; i <=5; i++){
        results.push(<li><Link to={"/posts/" + id}>Post number #{id}</Link></li>)
    }
    return(
       <ul>{results}</ul>
    );
}
export default PostList;