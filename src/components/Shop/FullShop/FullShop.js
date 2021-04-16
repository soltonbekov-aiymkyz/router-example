
import classes from "./FullShop.module.css";
import { Link } from "react-router-dom";

const FullShop = ({ match }) => {
    return ( 
        <div className={classes.FullShop}>
            <Link to="/shop">Back to posts</Link>
            <h1>News #{match.params.id}</h1>
        </div>
    );
}
 
export default FullShop;