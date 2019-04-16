import ListElement from './ListElement'
import React from 'react';
import OrderedListContainer from './styled';

function renderData(props){
    return props.breeds.map(breed => {
        return <ListElement key={breed} content={breed}/>
    });
}

function OrderedList(props){
        return (
            <OrderedListContainer>
                {renderData(props)}
            </OrderedListContainer>
        )
}

export default OrderedList;