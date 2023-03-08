import Item from "../Item";
import React from "react";

const ItemList = ({data = []}) => {
    return (
        data.map(cover => <Item key={cover.id} info={cover} />)
    );
}

export default ItemList;