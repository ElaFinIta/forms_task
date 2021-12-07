import React from 'react';
import Notes from './Notes'; 

const Main = ({data}) => {
    return (
        <div className="main">
            <h1>Visitors: </h1>
            {data.map((item) => (
          // packing all data for every item and passing to Notes
          <Notes {...item} key={item.id}/>
        ))}
        </div>
    );
};

export default Main;