import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import Colors from '../constants/Colors';
import commonStyles from '../constants/commonStyles';
import PropTypes from 'prop-types';

const addressFormType = {
  name: 'name',
  address: 'address',
  postcode: 'postcode',
  city: 'city',
  phoneNumber: 'phoneNumber',
};

export default function AddressForm({
  name,
  address,
  postcode,
  city,
  phoneNumber,
  onAddressInputEndEditing,
}) {
  return (
    <View>
      <TextField
        label={'Full name'}
        textColor={Colors.black}
        fontSize={12}
        labelFontSize={10}
        lineWidth={0.5}
        activeLineWidth={1}
        tintColor={Colors.mediumCarmine}
        baseColor={Colors.mediumBlack}
        errorColor={Colors.mediumCarmine}
        inputContainerStyle={styles.inputContainer}
        labelTextStyle={styles.inputLabel}
        defaultValue={name}
        onEndEditing={event =>
          onAddressInputEndEditing({
            type: addressFormType.name,
            value: event.nativeEvent.text,
          })
        }
      />
      <TextField
        label={'Street and house number'}
        textColor={Colors.black}
        fontSize={12}
        labelFontSize={10}
        lineWidth={0.5}
        activeLineWidth={1}
        tintColor={Colors.mediumCarmine}
        baseColor={Colors.mediumBlack}
        errorColor={Colors.mediumCarmine}
        inputContainerStyle={styles.inputContainer}
        labelTextStyle={styles.inputLabel}
        defaultValue={address}
        onEndEditing={event =>
          onAddressInputEndEditing({
            type: addressFormType.address,
            value: event.nativeEvent.text,
          })
        }
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TextField
          label={'Postcode'}
          textColor={Colors.black}
          fontSize={12}
          labelFontSize={10}
          lineWidth={0.5}
          activeLineWidth={1}
          tintColor={Colors.mediumCarmine}
          baseColor={Colors.mediumBlack}
          errorColor={Colors.mediumCarmine}
          inputContainerStyle={styles.inputContainer}
          labelTextStyle={styles.inputLabel}
          containerStyle={styles.smallInputContainer}
          defaultValue={postcode && postcode.toString()}
          onEndEditing={event =>
            onAddressInputEndEditing({
              type: addressFormType.postcode,
              value: event.nativeEvent.text,
            })
          }
        />
        <TextField
          label={'City (Finland only)'}
          textColor={Colors.black}
          fontSize={12}
          labelFontSize={10}
          lineWidth={0.5}
          activeLineWidth={1}
          tintColor={Colors.mediumCarmine}
          baseColor={Colors.mediumBlack}
          errorColor={Colors.mediumCarmine}
          inputContainerStyle={styles.inputContainer}
          labelTextStyle={styles.inputLabel}
          containerStyle={styles.smallInputContainer}
          defaultValue={city}
          onEndEditing={event =>
            onAddressInputEndEditing({
              type: addressFormType.city,
              value: event.nativeEvent.text,
            })
          }
        />
      </View>
      <TextField
        label={'Phone number'}
        textColor={Colors.black}
        fontSize={12}
        labelFontSize={10}
        lineWidth={0.5}
        activeLineWidth={1}
        tintColor={Colors.mediumCarmine}
        baseColor={Colors.mediumBlack}
        errorColor={Colors.mediumCarmine}
        inputContainerStyle={styles.inputContainer}
        labelTextStyle={styles.inputLabel}
        defaultValue={phoneNumber}
        onEndEditing={event =>
          onAddressInputEndEditing({
            type: addressFormType.phoneNumber,
            value: event.nativeEvent.text,
          })
        }
      />
    </View>
  );
}

AddressForm.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  postcode: PropTypes.number,
  city: PropTypes.string,
  phoneNumber: PropTypes.string,
  onAddressInputEndEditing: PropTypes.func,
};

AddressForm.defaultProps = {
  name: '',
  address: '',
  city: '',
  phoneNumber: '',
  onAddressInputEndEditing: ({ type, value }) => {},
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: -8,
    paddingTop: 36,
    height: 58,
  },
  smallInputContainer: {
    width: '45%',
  },
  inputLabel: {
    ...commonStyles.fontRalewayMedium,
    ...commonStyles.black,
  },
});
