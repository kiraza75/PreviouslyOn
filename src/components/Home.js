import React, { useEffect, useState } from 'react';
import axios from "../config";


const Home = props => {
    const [dataSeries, setdataSeries] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const [idSeries, setIdSeries] = useState(null);
    const send = {
        id: localStorage.getItem("user_id")
    }

    useEffect(() => {

        const token = localStorage.getItem("token");

        axios.get(`/shows/member?access_token=${token}`, send)
            .then(res => {
                setdataSeries(res.data.shows)
                setIsLoad(true)
            })


    }, []);

    const initPress = event => {
        //init time
        event.preventDefault();
        let time = 5200;
        let id = event.target
        console.log(dataSeries[0].id)
        
        //setTimeout(takeId(id), time)

        //setTimeout

    }
    // const takeId = (id) => {
        
    //         props.history.push(`/series/${id}`);

        
    // }

    return (
        <div>
            <h2>Home</h2>
            {
                isLoad && dataSeries.map((serie, i) => {
                   
                    return (
                    <div className="card__serie" key={serie.id} onClick={initPress}>
                        <h1>{serie.title}</h1>
                        <img src={serie.images.box} alt="img serie api" />
                    </div>
                    )}
                )
            }

        </div>
    );
}

export default Home;