import React from 'react'
import Item from '../Item'

const ItemList = ({data = [] }) => {
    return (
        data.map((cover) => <Item key={cover.id} info={cover} />)
    );
}

export default ItemList