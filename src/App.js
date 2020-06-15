import React from 'react';
import Main from './Main.js';
import Footer from './Footer.js';
import { idioms } from './idioms.js';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      reveal: false
    };
  }

  onReveal = (e) => {
    this.setState(previousState => ({ 
      reveal: true
    }));
  }

  next = (id, score) => {
    const data = JSON.parse(localStorage.getItem('data'));
    
    const previousIdiom = data.find(i => i['idiom'] === id);
    if (previousIdiom) previousIdiom['threshold'] = score;
    
    const len = data.length;
    let idiom;
    while ( ! idiom) {
      const randomIdiom = data[parseInt(Math.random() * len)];
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
      reveal: false
    });
  }

  componentDidMount() {
    const raw = localStorage.getItem('data');
    if ( ! raw) {      
      localStorage.setItem('data', JSON.stringify(
        Object.keys(idioms).map(idiom => ({ idiom, threshold: 0}))
      ));
    }
    this.next();
  }

  render() {
    return (
      <div className="App">
        <Main onReveal={this.onReveal} reveal={this.state.reveal}
          idiom={this.state.idiom} meaning={this.state.meaning} />
        <Footer next={this.next} idiom={this.state.idiom}
          reveal={this.state.reveal} />
      </div>
    );
  }
}

export default App;
