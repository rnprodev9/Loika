import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
// import OnboardingText from './OnboardingText';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    mainContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%'
    },
    image: {
      width: 320,
      height: 320,
      marginTop: 15,
      resizeMode: 'contain'
    },
    text: {
      color: '#000000',
      fontSize: 14,
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#282828',
      backgroundColor: 'transparent',
      marginBottom: 20
    },
    TextContainer: {
        flex: 1,
        width: 320,
        marginTop: 30
    },
    activeDot: {
        backgroundColor: '#AA3C3B'
    },
    dots: {
        backgroundColor: '#E8DFCA',
    },
    buttonStyle: {
        color: '#AA3C3B',
        textTransform: 'uppercase',
        fontSize: 16
    }
  });

const slides = [
    {
      key: 'somethun',
      title: 'Subscribe to our plan',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod tempor eiusmod tempor',
      image: require('../assets/images/slide1.png'),
      imageStyle: styles.image,
      colors: ['#282828', '#000000'],
    },
    {
      key: 'somethun1',
      title: 'We pick it up from farm',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod tempor eiusmod tempor',
      image: require('../assets/images/slide2.png'),
      imageStyle: styles.image,
      colors: ['#A3A1FF', '#3A3897'],
    },
    {
      key: 'somethun2',
      title: 'We deliver it to you',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod tempor eiusmod tempor',
      image: require('../assets/images/slide3.png'),
      imageStyle: styles.image,
      colors: ['#29ABE2', '#4F00BC'],
    },
    {
      key: 'somethun3',
      title: 'Enjoy the freshness',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod tempor eiusmod tempor',
      image: require('../assets/images/slide4.png'),
      imageStyle: styles.image,
      colors: ['#29ABE2', '#4F00BC'],
      hidePagination: true
    },
  ];
  

class OnboardingTextContainer extends Component {
    _renderItem = props => (
        <View style={[styles.mainContent, {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
        }]}>
            <Image style={styles.image} source={props.image}></Image>
            <View style={styles.TextContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>   
        </View>
    );

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderItem={this._renderItem}
                dotStyle={styles.dots}
                activeDotStyle={styles.activeDot}
                hideNextButton={true}
                showSkipButton={true}
                buttonTextStyle={styles.buttonStyle}
            />
        );
    }
}

export default OnboardingTextContainer;