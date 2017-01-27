/**
 * Created by madhubhushan on 1/27/2017.
 */
import React from 'react';

var AddReview = React.createClass({

    getInitialState(){
        return{
            newReview:''
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
        var isVisible = this.props.isVisible;
        if(isVisible) {
            return(
                <div id="numbers-frame">
                    <div className="well">
                        <h4>Add Review : {this.props.movieName}</h4>
                        <form onSubmit={this.handleSubmit}>
                                <textarea className="form-control" rows="3" ref="newItem"
                                          onChange={this.onChange}></textarea><br/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }
});

export default AddReview;