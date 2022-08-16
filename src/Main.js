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
              <HornedBeast name={data[3].title} />
              <HornedBeast name={data[4].title} />
              <HornedBeast name={data[5].title} />
              <HornedBeast name={data[6].title} />
              <HornedBeast name={data[7].title} />
              <HornedBeast name={data[8].title} />
              <HornedBeast name={data[9].title} />
              <HornedBeast name={data[10].title} />
              <HornedBeast name={data[11].title} />
              <HornedBeast name={data[12].title} />
              <HornedBeast name={data[13].title} />
              <HornedBeast name={data[14].title} />
              <HornedBeast name={data[15].title} />

            </main>

        )
    }
}

export default Main;