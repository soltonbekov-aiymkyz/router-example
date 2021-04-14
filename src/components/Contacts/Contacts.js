
import classes from "./Contacts.module.css";
const Contacts =()=> {
    return(
        <div className={classes.Contacts}>
        <h2> Contacts </h2>
        <p className={classes.con}>our contacts</p>
        <span>
            <p>+ 996 702 23 34 55 (WhatsApp) </p>
            <p>+ 234 56545634 </p>
        </span>
    </div>
    )
}
export default Contacts;

