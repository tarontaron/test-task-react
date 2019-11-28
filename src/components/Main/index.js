import React, { PureComponent } from 'react';
import autoBind from 'react-autobind';
import Header from '../Header';
import Content from '../Content';
import { getStories } from '../../services/storiesSvc';

import './styles.scss';

export class Main extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      stories: [],
    };
  }

  async componentDidMount() {
    const stories = await getStories();
    this.setState({
      stories
    });
  }

  render() {
    return (
      <main className="container">
        <Header />
        <Content stories={this.state.stories} />
      </main>
    );
  }
}

export default Main;
