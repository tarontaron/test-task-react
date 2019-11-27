import React, { PureComponent, Fragment } from 'react';
import autoBind from 'react-autobind';
import moment from 'moment';

import './styles.scss';

export class Story extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      opened: false,
    };
    this.isTweet = props.story.author_followers_count !== null;
  }

  toggleStory() {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  }

  publishTimeDifference() {
    return moment(this.props.story.publishTime).fromNow(
      moment.updateLocale('en', {
        relativeTime: {
          s: '%d seconds ago',
          ss: '%d seconds ago',
          m: '%d minute ago',
          mm: '%d minutes ago',
          h: '%d hour ago',
          hh: '%d hours ago',
          d: '%d day ago',
          dd: '%d days ago',
          M: '%d month ago',
          MM: '%d months ago',
        },
      }),
    );
  }

  render() {
    const { story } = this.props;

    return (
      <div className="story">
        <div className="icon">
          <img
            src={this.isTweet ? story.author_image_url : story.domain_cached_logo_url}
            alt="Logo"
          />
        </div>
        <div className="info">
          <h3 className="title">
            {story.title}
          </h3>
          <div className="domain">
            <div className="domain-name">
              {this.isTweet && (
                <Fragment>
                  <i className="fab fa-twitter twitter-icon" />
                  @
                </Fragment>
              )}
              {this.isTweet ? story.author_screen_name : story.domain_name}
            </div>
            <div className="publish-time">
              {this.publishTimeDifference()}
            </div>
          </div>
        </div>
        <div className="score-wrapper">
          <div className="score">
            {story.score} %
          </div>
        </div>
        <div className="expand">
          <i className={`fas fa-angle-${this.state.opened ? 'up' : 'down'}`} onClick={this.toggleStory} />
        </div>
      </div>
    );
  }
}

export default Story;
