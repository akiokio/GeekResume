import React, { Component } from 'react';
import axios from 'axios';
import { Layout, Spin } from 'antd';
const { Content } = Layout;

import Profile from '../../components/Profile';
import GeekFooter from '../../components/GeekFooter';
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      profile: {},
    }
  }

  getInitialState() {
    const _this = this;
    this.serverRequest = axios.get('profile.json')
    .then(function (response) {
      _this.setState({ isLoading: false, profile: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getInitialState();
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <Layout className="App horizontal-center">
        { this.state.isLoading
        ? <Spin className="all-center" size="large" />
        : <Content><Profile profile={this.state.profile} /><GeekFooter /></Content>
        }
      </Layout>
    );
  }
}

export default App;
