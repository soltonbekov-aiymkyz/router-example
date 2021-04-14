import classes from "./ShopList.module.css";
import { Link } from "react-router-dom";

const ShopList = () => {

    const results = [];
    for (let id = 1; id <=3; id++) {
        results.push(<li>
                
                        <Link to={"/shop/" + id}>purchases types #{id}</Link>
                    </li>)
    }                
    return ( 
        <div className={classes.WorldPostList}>
            {results}
        </div>
    );
}
 
export default ShopList;