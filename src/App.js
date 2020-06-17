import React from 'react';
import Main from './Main.js';
import Footer from './Footer.js';
import Header from './Header.jsx';
import Overlay from './Overlay.jsx';
import { idioms } from './idioms.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
      overlay: true,
      howMany: 10
    };
  }

  handleChange = (e) => {
    this.setState({howMany: e.target.value})
    return true;
  }

  onCheck = (e) => {
    localStorage.setItem('overlay', e.target.checked);
  }

  onCloseOverlay = (e) => {
    this.setState({overlay: false});
  }

  onReveal = (e) => {
    this.setState({reveal: true});
  }

  get data() {
    return JSON.parse(localStorage.getItem('data') || '[]');
  }

  get subset() {
    return this.data;
  }

  next = (id, score) => {
    const data = this.subset; //this.data;
    const previousIdiom = data.find(i => i['idiom'] === id);
    if (previousIdiom) previousIdiom['threshold'] = score;

    let idiom;
    while ( ! idiom) {
      const randomIdiom = data[parseInt(Math.random() * data.length)];
      const randomChance = Math.random();
      if (randomChance > randomIdiom['threshold']) {
        idiom = randomIdiom['idiom'];
      } else {
        randomIdiom['threshold'] -= 0.1;
      }
    }

    localStorage.setItem('data', JSON.stringify(data));

    this.setState({
      idiom,
      meaning: idioms[idiom],
      reveal: false,
      howMany: 10
    });
  }

  componentDidMount() {
    const raw = localStorage.getItem('data');
    if ( ! raw) {
      localStorage.setItem('data', JSON.stringify(
        Object.keys(idioms).map(idiom => ({ idiom, threshold: 0}))
      ));
    }
    const overlay = localStorage.getItem('overlay');
    if (overlay && overlay === 'true') this.setState({ overlay: false });
    this.next();
  }

  render() {
    return (
      <div className="App">
        <Header max={this.data.length} howMany={this.state.howMany} onChange={this.handleChange} />
        <Main onReveal={this.onReveal} reveal={this.state.reveal}
          idiom={this.state.idiom} meaning={this.state.meaning} />
        <Footer next={this.next} idiom={this.state.idiom}
          reveal={this.state.reveal} />
        {this.state.overlay
          && <Overlay onCloseOverlay={this.onCloseOverlay} onCheck={this.onCheck} />}
      </div>
    );
  }
}

export default App;
