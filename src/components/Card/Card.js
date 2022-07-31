import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props);
    const { id, name } = this.props.cat;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set4&size=180x180`}
          alt={`cats ${name}`}
        />
        <h2>{name}</h2>
      </div>
    );
  }
}

export default Card;
