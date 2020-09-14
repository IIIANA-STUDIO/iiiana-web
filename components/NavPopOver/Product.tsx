import React from 'react';
import Popover from '@material-ui/core/Popover';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import {Divider, Grid} from "@material-ui/core";
import PaymentIcon from '@material-ui/icons/Payment';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            pointerEvents: 'none',
        },
        paper: {
            padding: theme.spacing(1),
        },
    }),
);


export default function ProductPopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <a aria-owns={open ? 'mouse-over-popover' : undefined}
              /* aria-haspopup="true"*/
               onMouseEnter={handlePopoverOpen}
               onMouseLeave={handlePopoverClose} href="#services" className="nav-link">Products</a>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Grid container style={{width: 400}}>
                    <Grid item lg={4} md={4} style={{paddingRight: 10,  paddingLeft:10}}>
                        <p style={{fontSize: "x-large", margin:0, color: "#6c6cf6",}}>Product</p>

                        <Divider style={{width: "30%", backgroundColor: "#6d6df6", height: "2px"}}/>
                        <p style={{color: "#807875", fontSize: "13px", margin:0, marginTop:10}}>Product suite to manage the entire flow of money for your business</p>
                    </Grid>
                    <Grid container item lg={8} md={8}
                          style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", padding: "10px 0"}}>
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
                </Grid>
            </Popover>
        </div>
    );
}

