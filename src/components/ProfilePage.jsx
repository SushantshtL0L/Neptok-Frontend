import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import VideoGrid from './VideoGrid';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <ProfileHeader />
      <ProfileTabs />
      <VideoGrid />
    </div>
  );
};

export default ProfilePage;