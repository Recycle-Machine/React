import React from "react" 
import "./NotFound.css"

class NotFound extends React.Component{
    render(){
        return(
            <React.Fragment>
                <center>            
                    <img className="notFound" src="https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg" alt="" />
                </center> 
            </React.Fragment>
        );
    }
}

export default NotFound;