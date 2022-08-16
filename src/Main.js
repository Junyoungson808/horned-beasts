import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

console.log(data);

class Main extends React.Component {

    render() {
        return (
            <main>

              <HornedBeast name={data[0].title} />
              <HornedBeast name={data[1].title} />
              <HornedBeast name={data[0].title} />
              <HornedBeast name={data[1].title} />
              <HornedBeast name={data[0].title} />
              <HornedBeast name={data[1].title} />
              <HornedBeast name={data[0].title} />
              <HornedBeast name={data[1].title} />

            </main>

        )
    }
}

export default Main;