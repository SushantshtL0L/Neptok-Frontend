import React, { useState } from 'react';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="profile-tabs">
      <button
        className={activeTab === 'videos' ? 'active' : ''}
        onClick={() => setActiveTab('videos')}
      >
        Videos
      </button>
      
    </div>
  );
};

export default ProfileTabs;