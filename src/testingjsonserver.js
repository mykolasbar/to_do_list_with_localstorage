import React, { useEffect, useState } from 'react';

const Testingjsonserver = (props) => {

    let [printdata, setPrintdata] = useState([{}])
    useEffect(() =>  {
        fetch('http://localhost:3000/products')
        .then(res => {
            return res.json();
        })
        .then(data => {console.log(data)
                setPrintdata(data)
                console.log(printdata[0].title)
        })
    }, [])

    return (
        <>
            {printdata.map((value, index) => <div key = {value.id} style = {props.mystyle}>{value.title}</div>)}
        </>
    );
};

export default Testingjsonserver;