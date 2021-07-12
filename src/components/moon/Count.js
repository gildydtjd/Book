import React, { useEffect, useState } from 'react';

function Count() {
    const [count, setCount] = useState(
        ()=> JSON.parse(window.localStorage.getItem("count")) || 0
    );
    useEffect(()=>{
        window.localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    return (
        <div>
            <button onClick={()=> setCount(count+1)}>{count}</button>
        </div>
    );
}

export default Count;