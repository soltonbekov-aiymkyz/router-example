import {Link} from "react-router-dom"
const PostList =()=> {
    const results =[];
    for(let id = 1; id <=5; id++){
        results.push(<li><Link to={"/posts/" + id}>Post number #{id}</Link></li>)
    }
    return(
       <ul>{results}</ul>
    );
}
export default PostList;