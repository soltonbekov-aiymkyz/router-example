import { Route } from "react-router";
import FullShop from "./FullShop/FullShop";
import classes from "./Shop.module.css";
import ShopList from "./ShopList/ShopList";

const Shop = ({ match }) => {
    return ( 
        <div className={classes.Shop}>
            { match.isExact
            ? <ShopList />
            : <Route path="/shop/:id" component={FullShop} /> }
        </div>
    );
}
 
export default Shop;