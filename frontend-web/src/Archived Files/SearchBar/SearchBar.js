import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {}
  
    componentDidMount () {
      fetch('/Data.js')
        .then(res => res.json())
        .then(this.onLoad);
    }
  
    parseData (response) {
      return response.data;
    }
  
    onLoad = (data) => {
      this.setState({
        data: this.parseData(data)
      });
    }
  
    render () {
      const { data } = this.state;
  
      return data ?
        this.renderData(data) :
        this.renderLoading()
    }
  
    renderData (data) {
      if (data && data.length) {
        return (
          <div>
            {
              data.map(item => (
                <div key={item.id}>
                  <a href={`mailto:${item.title}`}>{item.description}</a> {item.image}
                </div>
              ))
            }
          </div>
        );
      } else {
        return <div>No items found</div>
      }
    }
  
    renderLoading () {
    return (
        <div class="right item">
            <div class="ui action input">
            <input type="text" placeholder="Search..." />
            <button type="submit" class="ui button">Go
            </button>
            </div>
        </div>
    );
}
}
