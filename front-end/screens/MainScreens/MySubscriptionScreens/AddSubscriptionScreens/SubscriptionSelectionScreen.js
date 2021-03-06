import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Animated,
  Modal,
  ScrollView,
} from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';

import Carousel from './Carousel';
import Loader from '../../../../components/Loader';
import Colors from '../../../../constants/Colors';
import commonStyles from '../../../../constants/commonStyles';
import { getAllSubscriptions } from '../../../../actions/subscription';
import {
  setSelectedSubscription,
  addSubscriptionToCart,
  removeSubscriptionFromCart,
  cleanCart,
} from '../../../../actions/checkout';
import Layout from '../../../../constants/Layout';

const width = Layout.window.width;

class SubscriptionSelectionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const numOfItems = navigation.getParam('items');
    return {
      headerTitle: 'Choose your subscription',
      headerBackTitle: null,
      headerTransparent: true,
      headerTintColor: Colors.mediumCarmine,
      headerBackImage: (
        <TouchableHighlight style={{ marginLeft: 20 }}>
          <Icon name={'arrow-back'} size={22} color={Colors.mediumCarmine} />
        </TouchableHighlight>
      ),
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={navigation.getParam('setCartVisible')}
        >
          <View>
            <Icon
              name={'shopping-basket'}
              size={22}
              color={Colors.mediumCarmine}
              containerStyle={{ marginTop: 2 }}
            />
            <View
              style={[
                {
                  width: 11,
                  height: 11,
                  left: 14,
                  top: -22,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 5.5,
                },
                {
                  opacity: numOfItems ? 1 : 0,
                },
              ]}
            >
              <Text
                style={{
                  ...commonStyles.fontRalewaySemiBold,
                  fontSize: 9,
                  textAlign: 'center',
                  ...commonStyles.textMediumCarmine,
                }}
              >
                {numOfItems}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        ...commonStyles.fontRalewayBold,
        fontSize: 18,
      },
      headerStyle: {
        marginTop: 10,
      },
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ setCartVisible: this._setCartVisible });
    this.props.navigation.setParams({ items: this.props.shoppingCart.length });
    this.props.navigation.setParams({ opacity: 0 });
    this.props.getAllSubscriptions();
  }

  state = {
    currentIndex: 0,
    cartVisible: false,
  };

  _setCartVisible = () => {
    if (this.state.cartVisible === false) {
      this.setState({ cartVisible: true });
    } else {
      this.setState({ cartVisible: false });
    }
  };

  onPressPlus = () => {
    const { allSubscriptions, selectedSubscription, shoppingCart } = this.props;

    if (!this.isAlreadyInCart(selectedSubscription)) {
      // Item not in cart, add item to cart
      this.props.addSubscriptionToCart(
        allSubscriptions[this.state.currentIndex]
      );
      this.props.navigation.setParams({ items: shoppingCart.length + 1 });
    } else {
      // Item already in cart, remove item from cart
      this.props.removeSubscriptionFromCart(
        allSubscriptions[this.state.currentIndex].id
      );
      this.props.navigation.setParams({ items: shoppingCart.length - 1 });
    }
    if (shoppingCart.length != 0) {
      this.props.navigation.setParams({ opacity: 1 });
    } else {
      this.props.navigation.setParams({ opacity: 0 });
    }
  };

  onPressConfirmOrder = () => {
    this.props.navigation.navigate('ShippingAddressCheckout');
  };

  displayAddToCartButton = () => {
    const { selectedSubscription } = this.props;
    if (!this.isAlreadyInCart(selectedSubscription)) {
      return (
        <View style={styles.plusCircle}>
          <Icon color={Colors.mediumCarmine} size={23} name={'add'} />
        </View>
      );
    } else {
      return (
        <View style={styles.checkCircle}>
          <Icon color={Colors.white} size={23} name={'done'} />
        </View>
      );
    }
  };

  displayCartItems = () => {
    const { shoppingCart } = this.props;
    let items = [];
    if (shoppingCart.length !== 0) {
      items.push(
        <View
          key="hr"
          style={{
            borderBottomColor: '#E1E1E1',
            borderBottomWidth: 1,
          }}
        />
      );
      shoppingCart.forEach(subscription => {
        items.push(
          <View key={subscription.id}>
            <View style={styles.cartItem}>
              <View>
                <Text style={styles.subscriptionName}>
                  {subscription.title}
                </Text>
                <Text style={styles.subscriptionWeight}>
                  {subscription.size}kg/box
                </Text>
              </View>
              <Text style={styles.cartPrice}>{subscription.totalPrice} ???</Text>
            </View>
            <View
              style={{
                borderBottomColor: '#E1E1E1',
                borderBottomWidth: 1,
              }}
            />
          </View>
        );
      });
      items.push(
        <View key="total" style={styles.cartTotalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <View>
            <Text style={styles.cartPrice}>{this.getTotalPrice()} ???</Text>
            <Text style={styles.cartTax}>*Total included VAT</Text>
          </View>
        </View>
      );
      return items;
    } else {
      return (
        <Text style={styles.noItemText}>Your cart is currently empty.</Text>
      );
    }
  };

  getTotalPrice = () => {
    return this.props.shoppingCart.reduce(
      (prev, curr) => prev + curr.totalPrice,
      0
    );
  };

  isAlreadyInCart = subscription => {
    const { shoppingCart } = this.props;
    return shoppingCart.map(s => s.id).includes(subscription.id);
  };

  clearCart = () => {
    this.props.cleanCart();
    this.props.navigation.setParams({ items: 0 });
    this.props.navigation.setParams({ opacity: 0 });
  };

  render() {
    const { width } = Dimensions.get('window');
    const { allSubscriptions } = this.props;
    const contentOffset = (width - Carousel.WIDTH) / 2;

    if (_.isEmpty(allSubscriptions)) {
      return <Loader />;
    }

    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ height: 60 }}>
          <View style={styles.bigCircle} />

          <View style={styles.priceTag}>
            <Text style={styles.priceText}>
              {allSubscriptions[this.state.currentIndex].totalPrice} ???
            </Text>
          </View>
        </View>
        <View style={{ height: 305 }}>
          <SideSwipe
            shouldCapture={() => true}
            extractKey={item => item.title}
            itemWidth={Carousel.WIDTH}
            threshold={5}
            style={{ width }}
            contentContainerStyle={{
              paddingTop: 20,
              overflow: 'visible',
              marginBottom: 10,
            }}
            data={allSubscriptions}
            contentOffset={contentOffset}
            onIndexChange={index => {
              this.props.setSelectedSubscription(allSubscriptions[index]);
              this.setState(() => ({ currentIndex: index }));
            }}
            renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
              <Carousel
                box={item}
                index={itemIndex}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
                onPressBoxImage={index =>
                  this.props.navigation.navigate('SubscriptionDetail')
                }
              />
            )}
          />
        </View>
        <Animated.View style={styles.textContainer}>
          <View style={styles.textTag}>
            <Text style={styles.textTagText}>
              {allSubscriptions[this.state.currentIndex].tag}
            </Text>
          </View>
          <Text style={styles.title}>
            {allSubscriptions[this.state.currentIndex].title}
          </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>
              {allSubscriptions[this.state.currentIndex].size}kg/box
            </Text>
            <View style={styles.circle} />
            <Text style={styles.valueText}>
              {allSubscriptions[this.state.currentIndex].mealPrice}???/meal
            </Text>
          </View>
          <Text style={styles.description}>
            {allSubscriptions[this.state.currentIndex].shortDescription}
          </Text>
        </Animated.View>
        <View style={styles.totalContainer}>
          <TouchableOpacity
            onPress={this.onPressPlus}
            style={{ alignItems: 'center' }}
          >
            {this.displayAddToCartButton()}
          </TouchableOpacity>
          <Text style={styles.total}>TOTAL: {this.getTotalPrice()} ???</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={this.onPressConfirmOrder}
            disabled={this.props.shoppingCart.length === 0}
          >
            <Text style={styles.orderText}>Confirm order</Text>
          </TouchableOpacity>
        </View>
        {/* Shopping cart */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.cartVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}
        >
          <View style={styles.cartModal}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                this._setCartVisible();
              }}
            />
            <View style={{ bottom: 0 }}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.cart}
              >
                <View>
                  <View style={styles.cartTitleContainer}>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon
                        name={'shopping-basket'}
                        size={30}
                        containerStyle={{ marginRight: 12 }}
                        color={Colors.mediumCarmine}
                      />
                      <Text style={styles.cartTitle}>My cart</Text>
                    </View>
                    <Button
                      type={'outline'}
                      title={'Clear'}
                      titleStyle={styles.clearText}
                      buttonStyle={styles.clearButton}
                      onPress={this.clearCart}
                    />
                  </View>
                </View>
                <View>{this.displayCartItems()}</View>
              </ScrollView>
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={styles.orderButton}
                  onPress={this.onPressConfirmOrder}
                  disabled={this.props.shoppingCart.length === 0}
                >
                  <Text style={styles.orderText}>Confirm order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cart: {
    backgroundColor: Colors.white,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#878787',
    shadowOpacity: 0.25,

    height: 369,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 26,
    paddingVertical: 24,
  },
  cartModal: {
    position: 'absolute',
    width: width,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  cartTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartTitle: {
    ...commonStyles.fontRalewayBold,
    fontSize: 20,
    color: Colors.black,
    marginTop: 2,
  },
  clearButton: {
    paddingHorizontal: 18,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: Colors.macaroniCheese,
    borderRadius: 50,
  },
  clearText: {
    ...commonStyles.fontRalewaySemiBold,
    fontSize: 12,
    color: Colors.macaroniCheese,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
  },
  subscriptionName: {
    ...commonStyles.fontRalewayBold,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  cartPrice: {
    ...commonStyles.fontRalewayBold,
    color: Colors.mediumCarmine,
    fontSize: 16,
    textAlign: 'right',
  },
  subscriptionWeight: {
    ...commonStyles.fontRalewaySemiBold,
    fontSize: 12,
    color: Colors.darkGrey,
    marginTop: 8,
  },
  totalText: {
    ...commonStyles.fontRalewayBold,
    fontSize: 20,
  },
  cartTax: {
    ...commonStyles.fontRalewayMedium,
    color: Colors.black,
    marginTop: 10,
    fontSize: 10,
    textAlign: 'right',
  },
  cartTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 32,
  },
  noItemText: {
    ...commonStyles.fontRalewayMedium,
    color: Colors.black,
    fontSize: 16,
    marginTop: 24,
  },
  orderButton: {
    width: width,
    height: 56,
    backgroundColor: Colors.mediumCarmine,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    bottom: 0,
    height: 56,
  },
  bigCircle: {
    position: 'absolute',
    width: 622,
    height: 622,
    left: -104,
    top: -321,
    borderRadius: 311,
    backgroundColor: Colors.macaroniCheese,
  },
  topBar: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  topText: {
    ...commonStyles.fontRalewayBold,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.mediumCarmine,
  },
  checkCircle: {
    width: 48,
    height: 48,
    backgroundColor: Colors.mediumCarmine,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
  plusCircle: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: Colors.mediumCarmine,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25,
  },
  total: {
    ...commonStyles.fontRalewayBold,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.mediumCarmine,
    paddingTop: 16,
  },
  totalContainer: {
    height: 90,
    justifyContent: 'center',
    marginTop: 25,
  },
  orderText: {
    ...commonStyles.fontRalewayBold,
    ...commonStyles.textWhite,
    fontSize: 20,
  },
  priceTag: Platform.select({
    ios: {
      position: 'absolute',
      width: 70,
      height: 70,
      left: 267,
      top: 100,
      borderRadius: 38,
      backgroundColor: Colors.mediumCarmine,
      shadowRadius: 4,
      shadowOffset: { height: 0, width: 4 },
      shadowColor: 'rgba(91, 91, 91, 0.25)',
    },
    android: {
      position: 'absolute',
      width: 75,
      height: 75,
      left: 287,
      top: 100,
      borderRadius: 38,
      backgroundColor: Colors.mediumCarmine,
      elevation: 4,
    },
  }),
  priceText: Platform.select({
    ios: {
      paddingTop: 22,
      paddingLeft: 10,
      ...commonStyles.fontRalewayBold,
      fontSize: 20,
      color: '#FFFFFF',
    },
    android: {
      paddingTop: 22,
      paddingLeft: 10,
      ...commonStyles.fontRalewayBold,
      fontSize: 22,
      color: '#FFFFFF',
    },
  }),
  textTag: {
    paddingHorizontal: 24,
    paddingVertical: 4,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mediumCarmine,
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 4 },
    shadowColor: 'rgba(91, 91, 91, 0.25)',
    elevation: 4,
    borderRadius: 13.5,
    marginBottom: 17,
  },
  textTagText: {
    ...commonStyles.fontRalewayBold,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  title: {
    ...commonStyles.fontRalewayBold,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.black,
  },
  valueContainer: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 17,
  },
  circle: {
    marginTop: 6,
    marginLeft: 12,
    marginRight: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.mediumCarmine,
  },
  valueText: {
    ...commonStyles.fontRalewayBold,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.darkGrey,
  },
  description: {
    ...commonStyles.fontRalewayMedium,
    fontSize: 14,
    textAlign: 'center',
    color: Colors.black,
    width: 280,
  },
});

const mapStateToProps = state => ({
  allSubscriptions: state.subscription.allSubscriptions,
  shoppingCart: state.checkout.shoppingCart,
  selectedSubscription: state.checkout.selectedSubscription,
});

export default connect(
  mapStateToProps,
  {
    getAllSubscriptions,
    setSelectedSubscription,
    addSubscriptionToCart,
    removeSubscriptionFromCart,
    cleanCart,
  }
)(SubscriptionSelectionScreen);
