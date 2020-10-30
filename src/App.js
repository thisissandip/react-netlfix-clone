import React, {Component} from 'react';
import allrequest from "./apifetches";
import SliderRow from "./components/SliderRow";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

class App extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = { 
            passed10sec: false,
         }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
               passed10sec: true,
            })
        },6000);
    }

    render() { 

        return ( 
            <>
            <Navbar/>
            <Header timepassed={this.state.passed10sec} />
            <div className="all-sliders">
            <SliderRow title={"Trending"} URL={allrequest.getTrending} potrait={false} />
            <SliderRow title={"Netflix TV Originals"} URL={allrequest.getNTVoriginals} potrait={true} />
            <SliderRow title={"Romance"} URL={allrequest.getRomance} potrait={false} />
            <SliderRow title={"Marvel Superheroes"} URL={allrequest.getMarvel} potrait={true} />
            <SliderRow title={"Upcoming Movies"} URL={allrequest.getUpcomoing} potrait={false} />
            <Footer />
            </div>
            
            </>
         );
    }
}

export default App;