import React, { useState, useEffect } from 'react';

const RandNumGen = () => {
    const [ number, setNumber ] = useState(42);

    useEffect(() => {
        function genRandNum () {
            let randNumber = Math.floor(Math.random()*1000);
            setNumber(randNumber);            
        }

        genRandNum()
        const numberStream = setInterval(genRandNum, 5000)

        return () => clearInterval(numberStream);
    }, [number])

    return (
        <>
            <p>{number}</p>
        </>
    )
}

export default RandNumGen;