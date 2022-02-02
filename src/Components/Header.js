import React from "react";


const Header = () => {

    return(
        <div style={{height:"100px", width:"100%", backgroundColor: "pink", color:"white", display:"flex", justifyContent:"space-between", alignContent:"center"}}>
        <div> Logo</div>
        <div style={{width:"300px", display:"flex", justifyContent:"space-around", margin:"20px"}} >
            <a href='#' style={{color:"white"}}>Home</a>
            <a href='#' style={{color:"white"}}>About</a>
            <a href='#' style={{color:"white"}}>Contact</a>
        </div>
        </div>
    )
}



export default Header;


