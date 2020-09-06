import React,{Component} from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.listener = null;
        this.state = { 
            navbarbg: false,
         }
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", ()=>{
            if(document.scrollingElement.scrollTop > 200){
                this.setState({
                    navbarbg: true,
                })
            }
            else{
                this.setState({
                    navbarbg: false,
                })
            }
        }) 
    }

    render() { 

        const styles = {
            background: "#131313",
        }

        return ( 
            <>
            <div style={this.state.navbarbg ? styles : null} className="navbar">
                <img className="logo" src={require('../imgs/logo.png') } alt="Logo" />
                <ul className="all-nav-items left-links">
                   <a href="#"><li className="nav-item">Home</li></a>
                   <a href="#"> <li className="nav-item">Trending</li></a>
                   <a href="#"> <li className="nav-item">Movies</li> </a>              
                   <a href="#"> <li className="nav-item">Latest</li></a>
                </ul>
                <ul className="all-nav-items right-links">
                   <li className="nav-item"><i className="fa fa-search"></i></li> 
                   <a href="#"> <li className="nav-item">CHILDREN</li></a>
                   <a href="#"> <li className="nav-item"><i className="fa fa-bell"></i></li> </a>              
                   <a href="#"> <li className="nav-item"><img className="avatar" src={require('../imgs/avatar.jpg')} alt="Profile" /> 	</li></a>
                   <li><span className="nav-item down-arrow">▼</span></li>
                </ul>
            </div>
            </>
         );
    }
}
 
export default Navbar;