/**
 * Created by madhubhushan on 1/27/2017.
 */
import React from 'react';

var AllReviews = React.createClass({
    render(){
        if(this.props.appData != '' && this.props.appData != undefined && this.props.appData != null) {
            if(this.props.appData.totalReviews != '' && this.props.appData.totalReviews != undefined && this.props.appData.totalReviews != null) {
                var allReviews = this.props.appData.totalReviews.map(function (ReviewData) {
                    var statusGood = <span><img src="./img/good.png" height="20px" width="20px"/> </span>
                    var statusBad = <span><img src="./img/bad.png" height="25px" width="25px"/> </span>
                    var smileGood = <span><img src="./img/smileyup.png" height="40px" width="40px"/> </span>
                    var smileBad = <span><img src="./img/smileydown.png" height="35px" width="35px"/> </span>
                    var status = ReviewData.isGoodReview ? statusGood : statusBad;
                    var smile = ReviewData.isGoodReview ? smileGood : smileBad;
                    const spanStyle = {
                        display: 'block',
                        float: 'right'
                    };
                    return (
                        <div>
                            <span>{ReviewData.reviewTxt}</span>
                            <span style={spanStyle}>
                                {status} {smile}
                            </span>
                            <hr/>
                        </div>
                    );
                });

                return (
                    <div >
                        <div className="well">
                            <h4>Reviews</h4>
                            <hr/>
                            <div>
                                {allReviews}
                            </div>
                        </div>
                    </div>
                );
            }
            else{
                <div >
                    <div className="well">
                        <h4>Reviews</h4>
                        <hr/>
                        <div>
                            No Reviews for this movie till now..
                            be the first to write one..
                        </div>
                    </div>
                </div>
            }
        }
        else{
            return (
                <div >
                    <div className="well">
                        <h4>Reviews</h4>
                        <hr/>
                        <div>
                            Click on any movie to load the Reviews...
                        </div>
                    </div>
                </div>
            );
        }

    }
});

export default AllReviews;