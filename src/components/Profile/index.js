import React from 'react';
import { Card, Icon, Tag, Timeline } from 'antd';

import GeekExperienceItem from '../../components/GeekExperienceItem';
import './styles.css';

const Profile = ({ profile }) => {
  const tagList = profile.tags.map((tag) => <Tag
    key={`tag-${tag}`}
    color="cyan"
  >{tag}</Tag>);
  const geekExperienceList = profile.workExperience.map((geekExperience, index) => (
    <GeekExperienceItem key={`wk-${index}`} expItem={geekExperience} />
  ));
  return (
    <Card className="profile-card">
      <div className="header all-center">
        <img
          className="avatar"
          src={profile.avatarUrl}
          alt={profile.fullName}
        ></img>
        <h2>{profile.fullName}</h2>
        <p>{profile.headline}</p>
        <div className="tag-list all-center">{tagList}</div>
      </div>
      <div className="content">
        <div>
          <div className="section-title">
            <Icon type="book" />&nbsp;<h3>Summary</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: profile.description }}></div>
        </div>
        <div>
          <div className="section-title">
            <Icon type="share-alt" />&nbsp;<h3>Geek experience</h3>
          </div>
          {geekExperienceList}
        </div>
        <div>
          <div className="section-title">
            <Icon type="share-alt" />&nbsp;<h3>Geek timeline</h3>
          </div>
          <Timeline>
            <Timeline.Item>Joined Geeks Anonymous 2015-09-01</Timeline.Item>
            <Timeline.Item>First cosplay 2012-01-01</Timeline.Item>
            <Timeline.Item>Addicted to comic books 2011-03-10</Timeline.Item>
            <Timeline.Item>Fist contact 2010-09-01</Timeline.Item>
          </Timeline>
        </div>
      </div>
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
  }).isRequired,
};

export default Profile;
