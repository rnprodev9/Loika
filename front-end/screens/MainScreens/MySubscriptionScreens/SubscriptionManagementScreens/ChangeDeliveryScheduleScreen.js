import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Colors from '../../../../constants/Colors';
import DeliverySchedule from '../../../../components/DeliverySchedule';
import commonStyles from '../../../../constants/commonStyles';
import Layout from '../../../../constants/Layout';

const width = Layout.window.width;

export default class ChangeDeliveryScheduleScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Change delivery schedule',
    headerTransparent: true,
    headerTintColor: Colors.mediumCarmine,
    headerBackImage: (
      <TouchableHighlight style={{ marginLeft: 20 }}>
        <Icon name={'arrow-back'} size={22} color={Colors.mediumCarmine} />
      </TouchableHighlight>
    ),
    headerTitleStyle: {
      ...commonStyles.fontRalewayBold,
      fontSize: 18,
    },
    headerStyle: {
      marginTop: 10,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.deliverySchedule}>
            <DeliverySchedule instructionText="*Delivery schedule will be change for next order" />
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../../assets/images/slide3.png')}
            />
          </View>
        </View>

        <View>
          <Button
            title={'Confirm changes'}
            titleStyle={styles.mainButtonTitle}
            buttonStyle={styles.mainButtonStyle}
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexBasis: '70%',
    flex: 1,
  },
  mainButtonStyle: {
    backgroundColor: Colors.mediumCarmine,
    width: width,
    height: 56,
  },
  mainButtonTitle: {
    ...commonStyles.fontRalewayBold,
    ...commonStyles.textWhite,
    fontSize: 20,
  },
  deliverySchedule: {
    flex: 2,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  image: {
    width: 204,
    height: 185,
    resizeMode: 'contain',
  },
});
