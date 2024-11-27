import React from "react"

import Box from '@mui/material/Box';


const Login = () => {
   
    
    return(
        <Box sx={{
            width:"100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#0f6efb",
        }}>   
            <Box sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}>
                <Box>
                    
                </Box>
                <form>
                    <h2>Login</h2>
                </form>
            </Box>
        </Box>
    )
}

export default Login;