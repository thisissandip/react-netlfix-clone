import React, {Component} from 'react';
import axios from "../axios"
import Poster from './Poster';
import MovieInfo from "./MovieInfo";


class SliderRow extends Component {
    constructor(props) {
        super(props);
        this.movieInfo = React.createRef();
        this.posterSelected = React.createRef();
        this.state = { 
            title: props.title,
            URL: props.URL,
            fetchedResults: [],
            potrait: props.potrait,
            movieInfoBackdrop: "",
            movieInfoTitle:"",
            moviedes: "",
            addBorder: false,
         }
         this.addInfo = this.addInfo.bind(this);
         this.removeInfo = this.removeInfo.bind(this);
         this.removeallBorders = this.removeallBorders.bind(this);
    }

    componentDidMount() {
        axios.get(this.state.URL)
        .then(response => {
            this.setState({
                fetchedResults: response.data.results.slice(0,6),
            })
           console.log(this.state.fetchedResults);
        })
    }

    addInfo(backdrop, title, description){
        this.setState({
            addBorder: true,
            movieInfoTitle: title,
            movieInfoBackdrop: backdrop,
            moviedes: description,
        });
        const movieInfocontainer = this.movieInfo.current;
        movieInfocontainer.classList.add("slide");
    }

    removeInfo(){
        const movieInfocontainer = this.movieInfo.current;
        movieInfocontainer.classList.remove("slide");
        this.removeallBorders();
    }

    removeallBorders(){
        const potraitItem =   document.querySelectorAll(".potrait-item");
        potraitItem.forEach((item)=>{
          item.classList.remove("add-border");
        })
  
        const landscapeitem =   document.querySelectorAll(".item");
        landscapeitem.forEach((item)=>{
          item.classList.remove("add-border");
        })
  
      }

    removeAllInfo(){
        const movieInfocontainerAll = document.querySelectorAll(".movie-info-container");
        movieInfocontainerAll.forEach(item => {
            item.classList.remove("slide");
        })
    }

    render() { 

        const allMovies = this.state.fetchedResults.map((item,index) => {
              return   <Poster  key={index}
              Title={item.original_title || item.original_name} overview={item.overview}
             poster={ this.state.potrait ? item.poster_path : item.backdrop_path}
             backdropForInfo={item.backdrop_path}
             potrait={this.state.potrait}
             addInfo={this.addInfo}
             addBorder={this.state.addBorder}
             removeInfo={this.removeAllInfo}
             />     
        });
        
        return ( 
            <>
            <div className="slider-title">{this.state.title}</div>
            <div className="slider-container">
                {allMovies}
            </div>
 
            <div ref={this.movieInfo}  className="movie-info-container">
                <MovieInfo 
                        title={this.state.movieInfoTitle} 
                        backdrop={this.state.movieInfoBackdrop} 
                        overview={this.state.moviedes}
                            close={this.removeInfo} />
            </div>  
                    
            </>
         );
    }
}
 
export default SliderRow;
