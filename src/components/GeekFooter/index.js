import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const GeekFooter = (props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      This project is open source and it is available on <a href="https://github.com/akiokio/GeekProfile" target="_blank">github</a>
    </Footer>
  )
}

export default GeekFooter;