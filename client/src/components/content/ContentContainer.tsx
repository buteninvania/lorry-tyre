import React from 'react';
import {useRoutes} from "../../routes";
import c from "./content.module.css";

export const ContentContainer = () => {

    const routes = useRoutes()

    return (
        <div className={c.content}>{routes}</div>
    )
}