import React from "react";

const ControlButtons = ({reset}) => {
    
    return (
        <div>
            <button className="btn reset" onClick={() => reset()} style={{"--btn-color":"Gray", "fontSize":"1.2em"}}>Reset</button>  
        </div>
    );
}

export default ControlButtons;