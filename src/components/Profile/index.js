import React from 'react';
import { Row, Col, Card, Icon, Tag, Timeline } from 'antd';

import GeekExperienceItem from '../../components/GeekExperienceItem';
import './styles.css';

const Profile = ({ profile }) => {
  const tagList = profile.tags.map((tag) => 
    <Tag key={`tag-${tag}`} color="cyan">{tag}</Tag>
  );
  const geekExperienceList = profile.workExperience.map((geekExperience, index) =>
    <GeekExperienceItem key={`wk-${index}`} expItem={geekExperience} />
  );
  const timeLine = profile.timeline.map((item, index) =>
    <Timeline.Item key={`timelineItem-${index}`} color={item.color}>{item.title}</Timeline.Item>
  );
  return (
    <Card className="profile-card">
      <Row type="flex" align="middle" justify="center" className="header">
        <Col sm={24} md={8}>
          <img className="avatar" src={profile.avatarUrl} alt={profile.fullName}></img>
        </Col>
        <Col sm={24} md={8}>
          <h2>{profile.fullName}</h2>
          <p>{profile.headline}</p>
        </Col>
        <Col sm={24} className="tag-list all-center">{tagList}</Col>
      </Row>
      <Row className="content">
        <div>
          <div className="section-title">
            <Icon type="book" />&nbsp;<h3>Summary</h3>
          </div>
          <div className="description display-linebreak">{profile.description}</div>
        </div>
        <div>
          <div className="section-title">
            <Icon type="share-alt" />&nbsp;<h3>Geek experience</h3>
          </div>
          <Row type="flex" justify="space-between" className="exp-row">{geekExperienceList}</Row>
        </div>
        <div>
          <div className="section-title">
            <Icon type="share-alt" />&nbsp;<h3>Geek timeline</h3>
          </div>
          <Timeline>{timeLine}</Timeline>
        </div>
      </Row>
    </Card>
  )
}

Profile.propTypes = {
  profile: React.PropTypes.shape({
    avatarUrl: React.PropTypes.string.isRequired,
    fullName: React.PropTypes.string.isRequired,
    headline: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array.isRequired,
    workExperience: React.PropTypes.array.isRequired,
    timeline: React.PropTypes.array.isRequired,
  }).isRequired,
};

export default Profile;
