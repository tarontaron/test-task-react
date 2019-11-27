import React from 'react';

import Story from '../Story';

import './styles.scss';

export const Content = ({ stories }) => (
  <div className="content">
    <div className="content-title">Watchlist</div>
    <div className="stories">
      {stories.map(story => (
        <Story
          key={story.id}
          story={story}
        />
      ))}
    </div>
  </div>
);

export default Content;
