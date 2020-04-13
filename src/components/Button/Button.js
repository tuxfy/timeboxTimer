import React from "react";
import './Button.scss';

const Button = ({title, size})=> {   
    const classes = {
        small: "small",
        medium: "medium",
        big: "big"
    }
  
    return (
      <>        
        <button className={classes[size]} onClick={event => event.stopPropagation()}>
            {title}
        </button>        
      </>
    );
  };
  
  export default Button;