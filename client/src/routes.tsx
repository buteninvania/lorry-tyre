import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import AboutCompany from "./pages/about/AboutCompany";
import Main from "./pages/main/Main";
import Payment from "./pages/payment/Payment";
import Information from "./pages/information/Information";
import Promotions from "./pages/promotions/Promotions";
import Contacts from "./pages/contacts/Contacts";
import Collections from "./pages/collections/Collections";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path={"/about"} component={AboutCompany} exact />
            <Route path={"/main"} component={Main} exact/>
            <Route path={"/payment"} component={Payment} exact />
            <Route path={"/info"} component={Information} exact />
            <Route path={"/promotions"} component={Promotions} exact />
            <Route path={"/contacts"} component={Contacts} exact />
            <Route path={"/collections"} component={Collections} exact />
            <Redirect to={"/about"}/>
        </Switch>
    )
}