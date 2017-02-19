import React from 'react';
import { Icon } from 'antd';

import './styles.css';

const GeekExperienceItem = ({ expItem }) => {
  return (
    <div className="exp-wrapper">
      <div>
        <Icon type="book" />&nbsp;{expItem.title}
      </div>
      <div className="from-to-row">
        <strong>From:</strong> {expItem.fromDate}&nbsp;<strong>To:</strong> {expItem.toDate}
      </div>
      <div className="exp-description display-linebreak">{expItem.description}</div>
    </div>
  )
}

GeekExperienceItem.propTypes = {
  expItem: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    gliphIco: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    fromDate: React.PropTypes.string.isRequired,
    toDate: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default GeekExperienceItem;
