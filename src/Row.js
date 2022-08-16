import React from 'react';
import Item from './Item.js';
import potato from '../src/Images/150.png'
import Image from '../src/Images/150.png'


class Row extends React.Component {

    render() {

        return (

            <div className="row">
                
                <Item name="Horned Beast"/>
                <img src={potato} alt="Unicorn"/>
                <p>This is a Unicorn</p>
                <Item name="Horned Beast"/>
                <img src={Image} alt="Goat"/>
                <p>This is a Unicorn</p>
                <Item name="Horned Beast"/>
                <img src={Image} alt="Dragon"/>
                <p>This is a Unicorn</p>

            </div>

        )
    }
}

export default Row;