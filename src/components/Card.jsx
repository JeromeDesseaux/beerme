import React from "react";
import "./Card.css";

export default class Card extends React.Component {

    truncate(string) {
        return string.length > 200 ? string.substring(0,200) : string;
    }

    render() {
        return (
            <div className="card">
                <img className="bottle" src={this.props.beerImage}/>
                <div className="content">
                    <h3 className="header">{this.props.beerName}</h3>
                    <span style={{overflow: 'hidden', textOverflow: 'ellipsis', padding: '1em'}}>             
                        {this.truncate(this.props.beerDescription)}
                    </span>
                </div>
            </div>
        )
    }
}