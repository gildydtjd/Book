import React from 'react';

function Data(props) {
    /* concat */
    const a = ["길","용"];
    const b = ["성"];
    const c = a.concat(b);
    console.log(c);

    /* filter */
    const array = ["dragon", "load","apple"];
    const result = array.includes("apple");
    console.log(result);
    return (
        <div>
            
        </div>
    );
}

export default Data;