import React, { Component } from 'react';

const API = 'http://100.115.92.202:4000/products/5c4fc812568d963128548d49';
//const DEFAULT_QUERY = 'redux';

class FetchApproach extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ hits: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { hits, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    console.log("This is what I found", hits);

    
    return (
      <h1>hey</h1>
      
      // <ul>
      //   {hits.data(hit =>
      //     <li key={hit.objectID}>
      //       <a href={hit.url}>{hit.name}</a>
      //     </li>
      //   )}
      // </ul>
    );
  }
}

export default FetchApproach;