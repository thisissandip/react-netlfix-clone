import React,{Component} from 'react';


class Poster extends Component {
    constructor(props) {
        super(props);
        this.item = React.createRef();
        this.state = { 
            poster: props.poster,
            potrait: props.potrait,
         }
         this.addBorder = this.addBorder.bind(this);
         this.removeallBorders = this.removeallBorders.bind(this);
    }

    addBorder(){
        const nowaddborder = this.item.current;
        nowaddborder.classList.add("add-border");
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

    render() { 
        const Landscape = {
            background: `url('https://image.tmdb.org/t/p/w500/${this.state.poster}')`,
            backgroundSize: "cover",
            width: "280px",
            height: "150px"
        }
    
        const Potrait = {
            background: `url('https://image.tmdb.org/t/p/w500/${this.state.poster}')`,
            backgroundSize: "cover",
            width: "300px",
            height: "450px"
        }

        // this.props.addBorder ? 
        return ( 
            <>
        {this.state.potrait ? <div ref={this.item} style={Potrait} className="potrait-item" tabindex="0"
                            onClick={() => {
                                this.props.removeInfo();
                                this.removeallBorders();
                                this.props.addInfo(this.props.backdropForInfo,this.props.Title,this.props.overview);
                                this.addBorder();
                                }}>
                            <img alt="More Info" className="poster-down-arrow" src={require('../imgs/down_arrow.png') } />
                        </div> 
                        :
                        <div ref={this.item} style={Landscape} className="item" tabindex="0"
                        onClick={() => {
                            this.props.removeInfo();
                            this.removeallBorders();
                            this.props.addInfo(this.props.backdropForInfo,this.props.Title,this.props.overview);
                            this.addBorder();
                         }} >
                            <img alt="More Info" className="poster-down-arrow" src={require('../imgs/down_arrow.png')} 
                             />
                        </div>
        }
            </>
            
         );
    }
}
 
export default Poster;