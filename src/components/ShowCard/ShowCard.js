import "../ShowCard/ShowCard.css";

function ShowCard(props) {
    return(
        <div className="ShowCard">
            <h7>{ props.date }</h7>
            <p>Venue: { props.venue }</p>
            <p>Location: { props.location }</p>
            <p>When: { props.time }</p>
        </div>
    )
}

export default ShowCard;