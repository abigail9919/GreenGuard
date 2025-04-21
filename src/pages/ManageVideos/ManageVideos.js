import Header from "../../components/Header/Header";

function ManageVideos() {
    return(
        <div className="Home-wrapper">
            <Header />

            <div className="Task-wrapper">
                {/* these will become clickable Routers
                <Link to={`/`}><img src={ HomeIcon }/></Link>
                <div className="Task">Manage Shows</div>
                <div className="Task">Manage Videos</div> */}
            </div>

        </div>
    )
}

export default ManageVideos;