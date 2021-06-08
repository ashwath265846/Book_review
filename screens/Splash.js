import React, { Component, component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Block, NavBar } from 'galio-framework';

class Splash extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Block>
        <LottieView
          // ref={(animation) => {
          //   this.animation = animation;
          // }}
          style={{
            width: 100,
            height: 400,
            backgroundColor: '#fff',
            paddingRight: 90,
          }}
          source={require('../assets/splash.json')}
          autoPlay
          loop={false}
        />
      </Block>
    );
  }
}

export default Splash;
