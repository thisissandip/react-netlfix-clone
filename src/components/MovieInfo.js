import React from 'react';


const MovieInfo = (props) => {

    return ( 
        <>
            <img className="backdrop" src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`} ></img>
             <i className="fa fa-times" onClick={props.close}></i>
             <div className="movie-info-content">
                 <h1 className="movie-info-title">{props.title}</h1>
                 <p className="movie-info-overview">{props.overview}</p>
                 <button className="header-button play" ><i className="fa fa-play" aria-hidden="true"></i><span className="button-title">Play</span></button>
             </div>
        </>
     );
}
 
export default MovieInfo;