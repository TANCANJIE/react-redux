import React, { Component } from "react";
import PropTypes from "prop-types";
import './App.css'
class Headers extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor() {
    super()
    this.state = { themeColor: '' };
  }

  componentWillMount() {
    const { store } = this.context
    this._updateThemeColor()
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor() {
    const { store } = this.context;
    const state = store.getState();
    this.setState({ themeColor: state.themeColor })
  }
  render() {
    return <h1 className="center" style={{ color: this.state.themeColor }}>标题坑位</h1>;
  }
}

export default Headers;
