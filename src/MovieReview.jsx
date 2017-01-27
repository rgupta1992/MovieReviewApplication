import React from 'react'
import {TagCloud} from 'react-tagcloud'
import ReactStars from 'react-stars'
import StarRating from 'react-star-rating'
/*import Slider from 'react-image-slider'*/
import Slider from 'react-slick'

var PolarAreaChart = require("react-chartjs").PolarArea;

var MovieSlider = React.createClass({
    handleClick(e){
        this.props.getMovieName(e.target.id);
        console.log(e.target.id);
    },

    render(){
        return(
			<div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <br /><br />
                                <h2 className="section-title">Movies</h2>
                                <div className="product-carousel">
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img  id="Dr. Strange" src="./img/drstrange.jpg" alt="" onClick={this.handleClick}/>
                                        </div>
                                        <h2><a href="single-product.html">Dr. Strange</a></h2>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img id="Batman Vs Superman" src="./img/bvs.jpg" alt="" onClick={this.handleClick}/>
                                        </div>
                                        <h2><a href="single-product.html">Batman Vs Superman</a></h2>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img id="Conjuring 2" src="./img/conjuring.jpg" alt="" onClick={this.handleClick}/>
                                        </div>
                                        <h2><a href="single-product.html">Conjuring 2</a></h2>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img id="The Jungle Book" src="./img/thejunglebook.jpg" alt="" onClick={this.handleClick}/>
                                        </div>
                                        <h2><a href="single-product.html">The Jungle Book</a></h2>
                                    </div>

                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img id="Lights Out" src="./img/lightsout.jpg" alt="" onClick={this.handleClick}/>
                                        </div>
                                        <h2><a href="single-product.html">Lights Out</a></h2>
                                    </div>
                                    <div className="single-product">
                                        <div className="product-f-image">
                                            <img id="Alice in Wonderland" src="./img/alice.jpg" alt="" onClick={this.handleClick}/>
                                        </div>
                                        <h2><a href="single-product.html">Alice in Wonderland</a></h2>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
    );
    }
});


var StatsComponent = React.createClass({
    getInitialState(){
        return{
            defaultStats:{"good": 80,
                            "bad":20}
        }
    },

    render(){

        const chartData = [
            {
                value:200,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 300,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 400,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            },
            {
                value: 500,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Grey"
            },
            {
                value: 600,
                color: "#4D5360",
                highlight: "#616774",
                label: "Dark Grey"
            }
        ];

        const chartData2 =  [{
            value:60,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Good"
        },
            {
                value: 80,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Bad"
            }];

        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        return(
            <div id="stats-frame">
                <ReactStars
                    count = {5}
                    onChange={3}
                    size={24}
                    color2={'#ffd700'}
                    edit = {false}
                    active = {2}
                    />
                <PolarAreaChart data={chartData2} />
                <div><StarRating name="movie-rating" caption="Rating" ratingAmount={5} rating ={3} size = {20} editing={false}/></div>
            </div>
        );
    }
});
var StarComponent = React.createClass({
    render(){
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }
        return(
            <div>
                <ReactStars
                    count = {5}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />
            </div>
        );
    }
});


var WordCloudComponent = React.createClass({
    render(){
        const data = [
            { value: "Zootopia", count: 10 }, { value: "Star Wars", count: 13 },
             { value: "Deadpool", count: 15 },{ value: "Alice in Wonderland", count: 7 },
            { value: "Suicide Squad", count: 12 }, { value: "Captain America", count: 8 },
            { value: "La La Land", count: 13 }, { value: "Moana", count: 9 },
            { value: "Kungfu Panda", count: 14 }, { value: "Star Trek", count: 13 },
            { value: "Arrival", count: 12 }, { value: "X Men", count: 16 },
            { value: "Dr Strange", count: 14 }, { value: "Moonlight", count: 7 },
            { value: "The Jungle Book", count: 13 }, { value: "Lights Out", count: 11 },
        ];

        const options = {
            luminosity: 'light',
            hue: 'blue'
        };
        return(
            <div id = "wordcloud-frame" className="well">
                <TagCloud minSize={12}
                          maxSize={35}
                          colorOptions={options}
                          tags={data}
                          onClick={tag => console.log('clicking on tag:', tag)} />
            </div>
        );
    }
});

var AddReview = React.createClass({

    getInitialState(){
        return{
            newReview:'',

        }
    },

    handleSubmit(e){
        e.preventDefault();
        this.props.addReview(newReview);
        this.setState({newReview: ''});
        React.findDOMNode(this.refs.newItem).focus();

        return;
    },

    onChange(e){
        console.log(e.target.value);
        this.setState({newReview: e.target.value});

    },

    render(){
        return(
            <div id = "numbers-frame">
                <div className="well">
                    <h4>Add Review : {this.props.movieName}</h4>
                    <form onSubmit = {this.handleSubmit}>
                        <textarea className="form-control" rows="3" ref="newItem" onChange= {this.onChange} ></textarea><br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );S
    }
});

var AllReviews = React.createClass({

    render(){

        var allReviews = this.props.reviews.map(function(review){
            var statusGood = <span><img src="./img/good.png" height="20px" width="20px" /> </span>
            var statusBad = <span><img src="./img/bad.png" height="25px" width="25px" /> </span>
            var status = review.isPositive?statusGood:statusBad;
            return(
                <div>
                    <hr/>
                    <span ><b>{review.title}</b></span><br/>
                    <span>{review.review}</span><br/>
                    {status}


                </div>
            );
        });

        return(
            <div >
                <div className="well">
                    <h4>Reviews</h4>

                    <div>
                        {allReviews}
                    </div>

                </div>
            </div>
        );
    }
});



var MovieReview = React.createClass({
    getInitialState(){
        return{
            reviewList: [{"title": "Dr. Strange",
                            "review": "This is a very nice movie",
                            "isPositive" : true,
                            "good" : 85,
                            "bad" : 25},
                {"title": "Alice in Wonderland",
                    "review": "This was not so good",
                    "isPositive" : false,
                    "good" : 34,
                    "bad" : 56},
                {"title": "The Jungle Book",
                    "review": "This is a good movie",
                    "isPositive" : true,
                    "good" : 95,
                    "bad" : 15},
                {"title": "Avengers 2",
                    "review": "This is a nice movie",
                    "isPositive" : true,
                    "good" : 67,
                    "bad" : 23},
                {"title": "Lights Out",
                    "review": "The movie was not that much interesting",
                    "isPositive" : false,
                    "good" : 35,
                    "bad" : 45}],

            reviews : ['first review', 'second review', 'third review'],
            movieName : ''
        };
    },

    addReview(newReview){
        var tempReview = this.state.reviews.concat([newReview]);
        this.setState({reviews : tempReview});
    },
    
    getMovieName(movie){
        this.setState({movieName: movie})
        console.log("From main:"+ this.state.movieName);
    },

    render(){
        return (
            <div className="col-lg-12 col-md-12">
                <MovieSlider getMovieName = {this.getMovieName}/>
			<div className="row">
				<div className="col-lg-8 col-md-8">
                		<AddReview addReview = {this.addReview} movieName = {this.state.movieName} />
		                <AllReviews reviews = {this.state.reviewList}/>
				</div>
				<div className="col-lg-4 col-md-4">
     		           	<WordCloudComponent />
           	     		<StatsComponent reviews = {this.state.reviewList} movieName = {this.state.movieName}/>
				</div>
			</div>
            </div>
        );
    }
});

export default MovieReview;