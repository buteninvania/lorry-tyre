import React from "react";
import {useLocation} from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const Collections = () => {

    const filter = useQuery().get("filter")
    const type = useQuery().get("type")

    return (
        <div>
            Коллекция: {filter} тип: {type}
        </div>
    )
}

export default Collections;