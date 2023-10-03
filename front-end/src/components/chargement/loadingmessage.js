import { useState } from "react";
import Loader from "./loader";

export default function LoadingMessage (props) {
    const {message} = props;
 
    
    return (
      
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <Loader/>
                <p>{message}</p>
            </div>
        
       
    )
}
