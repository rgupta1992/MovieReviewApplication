import React from 'react';
import {TagCloud} from 'react-tagcloud';
import Slider from 'react-slick';

import MovieSlider from '../src/MovieSlider.jsx';
import AllReviews from '../src/AllReviews.jsx';
import WordCloudComponent from '../src/WordCloud.jsx';
import StatsComponent from '../src/StatsComp.jsx';
import AddReview from '../src/AddReview.jsx';

import * as mraUtil from '../src/util/MRAUtil.js';
import * as mappingUtil from '../src/util/MRAMappingUtil.js';

var Rating = require('react-rating');
var PolarAreaChart = require("react-chartjs").PolarArea;

var MovieReview = React.createClass({
    getInitialState(){
        return{
            reviewAppData: '',
            movieName : '',
            reviewTxt : '',
            isVisible : false
        };

        this.getCompleteDataFromServer = this.getCompleteDataFromServer.bind();
    },

    getCompleteDataFromServer()
    {
           console.log('in getCompleteDataFromServer  method::', this.state);
           var data = mraUtil.getDataFromServer(this.state.movieName, this.state.reviewTxt);

           var reviewAppData = mappingUtil.getReviewAppData(data);

           this.setState({
               reviewAppData : reviewAppData,
               movieName : this.state.movieName,
               reviewTxt : this.state.reviewTxt
           });
    },

    addReview(newReview)
    {
        this.setState({reviewTxt: newReview});
        this.getCompleteDataFromServer();
    },
    
    getMovieName(movie)
    {
        console.log('in get movie name method::', movie);
        this.setState({movieName: movie})
        this.getCompleteDataFromServer();
    },

    render(){
        return (
            <div className="col-lg-12 col-md-12">
                <MovieSlider getMovieName = {this.getMovieName}/>
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                            <AddReview addReview={this.addReview} movieName={this.state.movieName} isVisible={this.state.isVisible}/>
                            <AllReviews appData={this.state.reviewAppData}/>
                    </div>
                    <div className="col-lg-4 col-md-4">
                            <WordCloudComponent appData={this.state.reviewAppData}/>
                            <StatsComponent appData={this.state.reviewAppData}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default MovieReview;