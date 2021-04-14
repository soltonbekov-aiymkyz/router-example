

import classes from "./Contacts.module.css";
const Contacts =()=> {
    return(
        <div className={classes.Contacts}>
        <h2>This is contacts page</h2>
        <p className={classes.con}>Us contacts</p>
        <span>
            <p>+ 996 702 3455 </p>
            <p>+ 234 56545634 </p>
        </span>
    </div>

    )
}
export default Contacts;

