import React from "react";
import NavBar from './../navbar/nav_bar';
import { Link } from 'react-router-dom'

const MusicPage = () => (
   

    <div>   
        <h1 id='profile-title' className='music-title'><Link to='/'>Study Dash</Link></h1>
        <div className="music-flex-container">
            {/* <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}
            <iframe src="https://open.spotify.com/embed/playlist/2pCWQFnu7EBlLNJInbytUw?utm_source=generator&theme=0" width="100%" height="600px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </div> 
);


export default MusicPage;