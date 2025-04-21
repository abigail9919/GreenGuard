import { useEffect, useState } from 'react';
import axios from 'axios';

// import Header from "../../components/Header/Header";
import ShowCard from "../../components/ShowCard/ShowCard";
import "./ManageShows.css";

function ManageShows() {
    const [shows, setShows] = useState([]);
    
    useEffect(() => {
        const loadShows = async() => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/shows`);
                console.log(response.data);
                setShows(() => [...response.data]);
            }
            catch (err) {
                console.error(err);
            }
        };

        loadShows();
    }, []);

    const showCards = shows.map((show) => <ShowCard
    date = { show.date }
    location = { show.location }
    time = { show.time }
    venue = { show.venue }
    />)

    return(
        <div className="ManageShows-wrapper">
            {/* <Header /> */}

            <h1>Manage Shows</h1>
            <h4 style={{position: "relative", top: "15px"}}>Click a card to edit details</h4>
            <div className="ShowCards-Wrapper">
                { showCards }
            </div>

        </div>
    )
}

export default ManageShows;