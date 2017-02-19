import React from 'react';
import { Col, Icon } from 'antd';

import './styles.css';

const GeekExperienceItem = ({ expItem }) => {
  return (
    <Col xs={24} sm={11} className="exp-wrapper">
      <div>
        <Icon type={expItem.gliphIco || 'right'} />&nbsp;{expItem.title}
      </div>
      <div className="from-to-row">
      { expItem.fromDate && expItem.toDate ?
        <div><strong>From:</strong> {expItem.fromDate}&nbsp;<strong>To:</strong> {expItem.toDate}</div>
      : ''}  
      </div>
      <div className="exp-description display-linebreak">{expItem.description}</div>
    </Col>
  )
}

GeekExperienceItem.propTypes = {
  expItem: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    gliphIco: React.PropTypes.string,
    description: React.PropTypes.string.isRequired,
    fromDate: React.PropTypes.string,
    toDate: React.PropTypes.string,
  }).isRequired,
};

export default GeekExperienceItem;
