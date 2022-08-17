import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

console.log(data);

class Main extends React.Component {

    beastItem = data.map((value) => {
        return <HornedBeast name={value.title} image={value.image_url} />
    }
)

    render() {
        return (
            <main>

              {this.beastItem}
              
            </main>

        )
    }
}

export default Main;