import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import Overlay from './Intro';
import { idioms } from './idioms.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      revealAnswer: false,
      showIntroScreen: true
    };
  }

  handleChange = (e) => {
    console.log('handling change ', e);
    // this.setState({howMany: e.target.value})
    // return true;
  }

  toggleIntroScreen = (e) => {
    localStorage.setItem('showIntroScreen', e.target.checked);
  }

  doCloseIntroScreen = (e) => {
    this.setState({showIntroScreen: false});
  }

  doRevealAnswer = (e) => {
    this.setState({revealAnswer: true});
  }

  get data() {
    return JSON.parse(localStorage.getItem('data') || '[]');
  }

  doUpdateKnowledge = (idiom, score) => {
    const previousIdiom = this.data.find(i => i['idiom'] === idiom);
    if (previousIdiom) previousIdiom['threshold'] = score;

    this.doNextIdiom();
  }

  doNextIdiom() {
    let idiom;
    while (!idiom) {
      const randomIdiom = this.data[parseInt(Math.random() * this.data.length)];
      const randomChance = Math.random();
      if (randomChance > randomIdiom['threshold']) {
        idiom = randomIdiom['idiom'];
      } else {
        randomIdiom['threshold'] -= 0.1;
      }
    }

    this.setState({
      idiom,
      meaning: idioms[idiom],
      revealAnswer: false
    });
  }

  componentDidMount() {
    const raw = localStorage.getItem('data');
    if ( ! raw) {
      localStorage.setItem('data', JSON.stringify(
        Object.keys(idioms).map(idiom => ({ idiom, threshold: 0}))
      ));
    }
    const showIntroScreen = localStorage.getItem('showIntroScreen');
    if (showIntroScreen && showIntroScreen === 'true') {
      this.setState({ showIntroScreen: false });
    }
    this.doNextIdiom();
  }

  render() {
    return (
      <div className="App">
        {/* <Header max={this.data.length} howMany={this.state.howMany} onChange={this.handleChange} /> */}
        <Main doRevealAnswer={this.doRevealAnswer} revealAnswer={this.state.revealAnswer}
          idiom={this.state.idiom} meaning={this.state.meaning} />
        <Footer doUpdateKnowledge={this.doUpdateKnowledge} idiom={this.state.idiom}
          revealAnswer={this.state.revealAnswer} />
        {this.state.showIntroScreen &&
          <Overlay doCloseIntroScreen={this.doCloseIntroScreen}
            toggleIntroScreen={this.toggleIntroScreen} />}
      </div>
    );
  }
}

export default App;
