import {compose, mount, route, withView} from "navi";
import Layout from "../Components/Layouts";
import {View} from "react-navi";
import React from "react";
import Home from "../Pages/Home/Home";

export default compose(
    withView((request, context, arg) => <Layout>
        <View/>
    </Layout>),
    mount({
        '/': route({
            title: 'IIIANA Studios Home',
            view: <Home/>
        })
    })
)