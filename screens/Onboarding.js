import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';
<<<<<<< HEAD
=======
import LottieView from 'lottie-react-native';
import Splash from '../screens/Splash';
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;
<<<<<<< HEAD
=======

>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex backgroundColor="white">
          {/* <ImageBackground
            source={Images.Onboarding}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          /> */}
          <Block space="between" style={styles.padded}>
            <Block>
              <Block middle>
<<<<<<< HEAD
                <Image source={Images.NowLogo} style={{ width: 350, height: 150, bottom: 160, position: 'absolute' }} />
              </Block>
              
=======
                {/* <Image source={Images.NowLogo} style={{ width: 350, height: 150, bottom: 160, position: 'absolute' }} /> */}
                <Splash />
              </Block>

>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
              <Block>
                <Block middle>
                  <Text
                    style={{
<<<<<<< HEAD
                      fontFamily: 'montserrat-regular', bottom: 50, position: 'absolute', letterSpacing: 2, paddingHorizontal: 10, textAlign: 'center'
                    }}
                    color="white"
                    size={38}
                  >
                   Library Book Review 
=======
                      fontFamily: 'montserrat-regular',
                      bottom: 50,
                      position: 'absolute',
                      letterSpacing: 2,
                      paddingHorizontal: 10,
                      textAlign: 'center',
                    }}
                    color="black"
                    size={38}
                  >
                    {/* Library Book Review */}
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                  </Text>
                </Block>
              </Block>
              {/* <Block middle row>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                  Designed by
                </Text>
                <Image
                  source={Images.InvisionLogo}
                  style={{
                    height: 28,
                    width: 91,
                    marginLeft: theme.SIZES.BASE
                  }}
                />
              </Block> */}
              {/* <Block middle row style={{ marginTop: 15, marginBottom: 30}}>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                  Coded by
                </Text>
                <Image
                  source={Images.CreativeTimLogo}
                  style={{
                    height: 29,
                    width: 129,
                    marginLeft: theme.SIZES.BASE
                  }}
                />
              </Block> */}

              <Block
                row
                style={{
                  marginTop: theme.SIZES.BASE * 2.5,
<<<<<<< HEAD
                  marginBottom: theme.SIZES.BASE * 2
=======
                  marginBottom: theme.SIZES.BASE * 2,
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                }}
              >
                <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    GET STARTED
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
<<<<<<< HEAD
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
=======
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
<<<<<<< HEAD
    shadowOpacity: 0
=======
    shadowOpacity: 0,
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
<<<<<<< HEAD
    height: 66
  }
=======
    height: 66,
  },
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
});
