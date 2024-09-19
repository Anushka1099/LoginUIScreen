import { Box, Button, Grid, InputAdornment, styled, TextField, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import LogoImage from "../component/images/image_.png"
import PasswordIcon from '@material-ui/icons/LockOutlined';
import LanguageIcon from '@material-ui/icons/LanguageOutlined';

export default class LoginScreen extends Component {
    render() {
        return (
            <>
                <LoginWrapper>
                    <Grid container>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Box style={{ display: "flex", flexDirection: "column", justifyContent:"center", height: '100vh', alignItems:"center" }}>
                                <Typography className='welcomeTxt'>Welcome to <img src={LogoImage} style={{ width: "183px", height: "74px" }} /></Typography>
                                <Typography className='loginTxt'>Login to access all our Services.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={12} sm={12} xs={12}>
                            <Box className='loginContainer'>
                                <Box style={{ background: "black", textAlign: "center", padding: 15, borderRadius: "45px 45px 0 0", }}>
                                    <img src={LogoImage} style={{ width: "183px", height: "74px" }} />
                                </Box>
                                <Box style={{padding: '30px 20px 20px 20px', color: "black", textAlign: "center", background: "white", }}>
                                    <Typography className='welcomeBackTxt'>Welcome Back!</Typography>
                                    <Typography className='loginText'>Login</Typography>
                                    <TextField placeholder='Phone Number' fullWidth variant='outlined' className='textField' />
                                    <TextField placeholder='Password' fullWidth variant='outlined' className='textField' InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <PasswordIcon />
                                            </InputAdornment>
                                        )
                                    }} />
                                    <Typography style={{ textAlign: "end", marginTop: 15 }}>Forgot Password?</Typography>
                                    <Button className='loginBtn' variant='contained'>Login</Button>
                                    <Typography className='accountTxt'>Don’t have an account ? <span className='signUpTxt'>Sign Up</span></Typography>
                                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", gap:15, marginTop:20 }}>
                                        <Box style={{display:"flex", alignItems:"center", gap: 5}}>
                                            <LanguageIcon />
                                        <Typography>Language</Typography>
                                        </Box>
                                        <Button className='englishBtn' variant='contained'>English</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </LoginWrapper>
            </>
        )
    }
}

const LoginWrapper = styled(Box)({
    display: "flex",
    background:"gray",
    // backgroundImage: "url(../component/images/bgimage.jpg)",
    backgroundSize: "cover",
    backgroundPosition:"center",
    color: "white",
    "& .welcomeTxt": {
        fontWeight:600,
        fontSize:64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap:15
    },
    "& .loginTxt": {
        marginTop:"30px",
        fontWeight: 400,
        fontSize: 32,
        marginRight:60
    },
    "& .loginContainer": {
        margin: "auto",
        width:"70%",
        marginBottom: 20,
        marginTop:50
    },
    "& .textField": {
        marginTop:15
    },
    "& .welcomeBackTxt": {
        fontWeight: 700,
        fontSize: 48
    },
    "& .loginText": {
        fontWeight: 700, 
        fontSize: 30
    },
    "& .loginBtn": {
        fontWeight: 600,
        fontSize: 20,
        textTransform:"capitalize",
        color: "white",
        width: "100%",
         marginTop:20,
        background:"#527FE2"
    },
    "& .englishBtn": {
        fontWeight: 400,
        fontSize: 14,
        textTransform: "capitalize",
        color: "#527FE2",
        background: "#E0E7FF"
    },
    "& .accountTxt": {
        fontWeight: 400,
        fontSize: 16,
        marginTop:70
    },
    "& .signUpTxt": {
        fontWeight: 600,
        fontSize: 16,
        color: "#527FE2",
    },
})