import React from 'react';
import Popover from '@material-ui/core/Popover';
import {Divider, Grid} from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';


export default function ProductPopover() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <React.Fragment>
            <a  href="#services" className="nav-link" aria-describedby={id} onClick={handleClick}>
                Products
            </a>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Grid container style={{width: 400}}>
                    <Grid item lg={4} md={4} style={{paddingRight: 10,  paddingLeft:10}}>
                        <p style={{fontSize: "x-large", margin:0, color: "#6c6cf6",}}>Product</p>

                        <Divider style={{width: "30%", backgroundColor: "#6d6df6", height: "2px"}}/>
                        <p style={{color: "#807875", fontSize: "13px", margin:0, marginTop:10}}>Product suite to manage the entire flow of money for your business</p>
                    </Grid>
                    <Grid container item lg={8} md={8}
                          style={{display: "flex", padding: "10px 10px"}}>
                        <a href="payment-gateway" style={{display:"contents"}}>
                            <Grid container>
                                <Grid item lg={2} md={2} style={{position: "relative"}}>
                                    <div style={{
                                        padding: 5,
                                        textAlign: "center",
                                        width: 35,
                                        height: 35,
                                        backgroundColor: "#fb5f00",
                                        borderRadius: "50%",
                                        position:"absolute",
                                        top: 7
                                    }}>
                                        <PaymentIcon style={{width: "100%", height: "auto", color: "#FFF"}}/>
                                    </div>

                                </Grid>
                                <Grid item lg={10} md={10}>
                                    <p style={{marginBottom: "0px", fontWeight: 400, fontSize: "16px"}}>Payment Gateway</p>
                                    <p style={{color: "#807875", fontSize: "13px"}}>Payment on your website made easy.</p>
                                </Grid>
                            </Grid>

                        </a>
                        <a href="payment-link" style={{display:"contents"}}>
                            <Grid container>
                                <Grid item lg={2} md={2} style={{position: "relative"}}>
                                    <div style={{
                                        padding: 5,
                                        textAlign: "center",
                                        width: 35,
                                        height: 35,
                                        backgroundColor: "#d83fb4",
                                        borderRadius: "50%",
                                        position:"absolute",
                                        top: 7
                                    }}>
                                        <LinkRoundedIcon style={{width: "100%", height: "auto", color: "#FFF"}}/>
                                    </div>

                                </Grid>
                                <Grid item lg={10} md={10}>
                                    <p style={{marginBottom: "0px", fontWeight: 400, fontSize: "16px"}}>Payment Link</p>
                                    <p style={{color: "#807875", fontSize: "13px"}}>Create and send link with ease.</p>
                                </Grid>
                            </Grid>
                        </a>

                    </Grid>
                </Grid>
            </Popover>
        </React.Fragment>
    );
}
