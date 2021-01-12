import React from "react";
import {useEffect} from "react";
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import theme from "../theme/material-ui-theme";
import "../css/main.css"
/*import firebase from "firebase";*/

/*const firebaseConfig = {
    apiKey: "AIzaSyAqO3af_Drw08IO4W2ApiJC3BlkW-LE_I8",
    authDomain: "iiiana.firebaseapp.com",
    databaseURL: "https://iiiana.firebaseio.com",
    projectId: "iiiana",
    storageBucket: "iiiana.appspot.com",
    messagingSenderId: "6943991530",
    appId: "1:6943991530:web:67fb81d8a8ffbcca"
};

firebase.initializeApp(firebaseConfig)*/

function MyApp({Component, pageProps}) {

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    const getLayout = Component.getLayout  || (page => page)

    return (
        <React.Fragment>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                {getLayout(<Component {...pageProps}/>)}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default MyApp