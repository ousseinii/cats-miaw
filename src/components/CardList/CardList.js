import React, { Component } from 'react';
import './CardList.css';
import Card from '../Card/Card';

class CardList extends Component {
  render() {
    const { cats } = this.props;
    return (
      <div className="card-list">
        {cats.map((cat) => {
          return <Card key={cat.id} cat={cat} />;
        })}
      </div>
    );
  }
}

export default CardList;
