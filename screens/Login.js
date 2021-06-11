<<<<<<< HEAD
import React, {useState} from 'react';
=======
import React from 'react';
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';
<<<<<<< HEAD
=======

>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
import { Button, Icon, Input } from '../components';
import { Images, nowTheme } from '../constants';
import { Entypo } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
);

class Login extends React.Component {
<<<<<<< HEAD
  
  render() {
    

    const submitData=()=>{
      fetch("10.0.2.2:3000/stdlogin",{
        method:"post",
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          password
        })
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }


    const { navigation } = this.props;
=======
  render() {
    const { navigation } = this.props;

>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
    return (
      <DismissKeyboard>
        <Block flex middle>
          <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
          >
            <Block flex middle>
              <Block style={styles.loginContainer}>
                <Block flex space="evenly">
                  <Block flex={0.4} middle style={styles.socialConnect}>
                    <Block flex={30.0} middle style={styles.logintext}>
                      <Text
                        style={{
                          fontFamily: 'montserrat-regular',
                          textAlign: 'center'
                        }}
                        color="#333"
                        size={30}
                      >
                        Login
                      </Text>
                    </Block>

                    <Block flex={0.5} row middle space="between" style={{ marginBottom: 18 }}>
              
                    </Block>
                  </Block>

                  <Block flex={1} middle space="between" style={styles.butt}>
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>
                        <Block width={width * 0.8}>
                            <Input
                              placeholder="Email"
                              keyboardType="email-address"
                              required
                              email
                              style={styles.inputs}
<<<<<<< HEAD
                              onChangeText={text=>setemail(text)}
                              value={email}
=======
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="email-852x"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Input
                              placeholder="Password"
                              secureTextEntry
                              minLength={8}
                              style={styles.inputs}
<<<<<<< HEAD
                              onChangeText={text=>setpassword(text)}
                              value={password}
=======
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                              iconContent={
                                <Entypo
                                  size={16}
                                  color="#ADB5BD"
                                  name="eye"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          
                          <Block
                            style={{ marginVertical: theme.SIZES.BASE, marginLeft: 15}}
                            row
                            width={width * 0.75}
                          >
                            <Checkbox
                              checkboxStyle={{
                                borderWidth: 1,
                                borderRadius: 2,
                                borderColor: '#E3E3E3'
                              }}
                              color={nowTheme.COLORS.PRIMARY}
                              labelStyle={{
                                color: nowTheme.COLORS.HEADER,
                                fontFamily: 'montserrat-regular'
                              }}
                              label="I agree to the terms and conditions."
                            />
                          </Block>
                        </Block>
                        <Block center>
                          <Button 
                          color="primary" 
                          round style={styles.createButton}
<<<<<<< HEAD
                          onPress={() => submitData()}
                          // onPress={() => navigation.navigate('App')}
=======
                          onPress={() => navigation.navigate('App')}
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                          >
                            <Text
                              style={{ fontFamily: 'montserrat-bold' }}
                              size={14}
                              color={nowTheme.COLORS.WHITE}
                            >
<<<<<<< HEAD
                              Login
=======
                              Log
>>>>>>> 1f99f5c36bf5af5d4c9f719ba6cc0b52f2e80b1e
                            </Text>
                          </Button>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {
    width: width,
    height: height
  },
  loginContainer: {
    marginTop: 65,
    width: width * 0.9,
    height: height < 812 ? height * 0.7 : height * 0.8,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 20,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  butt: {
    marginTop: 50

  },
  logintext: {
    marginTop: 80,
    fontSize: 30 

  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,

  },
  inputIcons: {
    marginRight: 18,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
   // marginTop: 30 ,
    borderWidth: 1.5,
    borderColor: '#264348',
    borderRadius: 21.5
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 90
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10
  }
});

export default Login;
