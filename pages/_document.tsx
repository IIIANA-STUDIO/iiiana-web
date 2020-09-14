import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from "../theme/material-ui-theme";
import ServerStyleSheets from "@material-ui/styles/ServerStyleSheets";
import React from 'react';


export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                    <link rel="stylesheet" href="/assets/fonts.css" />

                    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                    <link href="/assets/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />


                    <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
                    <link rel="stylesheet" href="/assets/css/owl.theme.css" />
                    <link rel="stylesheet" href="/assets/css/owl.transitions.css" />

                    <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
                </Head>
                <body style={{backgroundColor: '#cfd8dc'}}>
                <Main />
                <NextScript />
                <script src="/assets/js/jquery.min.js"></script>
                <script src="/assets/js/bootstrap.bundle.min.js"></script>
                <script src="/assets/js/jquery.easing.min.js"></script>
                <script src="/assets/js/scrollspy.min.js"></script>
                <script src="/assets/js/counter.init.js"></script>

                <script src="/assets/js/owl.carousel.min.js"></script>

                <script src="/assets/js/swiper.min.js"></script>

                <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                <script src="/assets/js/contact.js"></script>
                <script src="/assets/js/plugins-init.js"></script>
                <script src="/assets/js/app.js"></script>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collect(<App {...props}/>)
    })

    const initialProps = await Document.getInitialProps(ctx)

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()]
    }
}
