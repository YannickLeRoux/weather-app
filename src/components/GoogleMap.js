import React, { Component } from 'react'

export default class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: parseInt(this.props.lat),
        lgn: parseInt(this.props.lon)
      }
    });
  }

  render() {
    return (
      <div ref="map" />
    )
  }
}
