import React, { useEffect, useState } from 'react';
import "./Style.css";

const Home = () => {
    const [data, setdDta] = useState([])

    const axios = require('axios').default;
    useEffect(() => {
        axios.get('')
            .then(function (v) {
                // handle success
                console.log(v.data);
                setdDta(v.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])



    return (
        <div className='Home'>
            <h1 className='home_title p-5 text-success'>Hello word</h1>
            <img className='home_img' src="https://image.shutterstock.com/image-vector/exempt-grunge-rubber-stamp-on-260nw-1060049801.jpg" alt="exempt" />
        </div>
    )
}

export default Home