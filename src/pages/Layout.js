import classes from "*.module.css";
import React from "react";
import Aux from "./Aux";
// import classes from "./Layout.css";

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={ classes.Content }>
            { props.children }
        </main>
    </Aux>
);

export default layout;