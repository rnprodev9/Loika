import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Animated,
  Modal,
  ScrollView
} from 'react-native';
import SideSwipe from 'react-native-sideswipe';
import { Icon } from 'react-native-elements';
import Carousel from '../../../../components/Carousel';
import Colors from '../../../../constants/Colors';
import commonStyles from "../../../../constants/commonStyles";

const boxes = [
  {
    title: 'Mixed Box',
    price: 199,
    size: '5 kg/box',
    divprice: '3-4€/meal',
    description:
      'Best of both worl. Can include beef, pork , chicken, milk, eggs, potatoes, brocoli, cabbage... Check to see more details.',
    tag: 'Best seller',
    image: require('../../../../assets/images/mixed.png'),
  },
  {
    title: 'Vegan Box',
    price: 299,
    size: '5 kg/box',
    divprice: '3-4€/meal',
    description:
      'Best of both worl. Can include beef, pork , chicken, milk, eggs, potatoes, brocoli, cabbage... Check to see more details.',
    tag: 'Vegan',
    image: require('../../../../assets/images/vegan.png'),
  },
  {
    title: 'Meat Box',
    price: 499,
    size: '5 kg/box',
    divprice: '3-4€/meal',
    description:
      'Best of both worl. Can include beef, pork , chicken, milk, eggs, potatoes, brocoli, cabbage... Check to see more details.',
    tag: 'Meat',
    image: require('../../../../assets/images/meat.png'),
  },
];

export default class SubscriptionSelectionScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Choose your subscription',
    headerTransparent: true,
    headerTintColor: Colors.mediumCarmine,
    headerBackImage: (
      <TouchableOpacity style={{ marginLeft: 20 }}>
        <Icon name={'arrow-back'} size={22} color={Colors.mediumCarmine} />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }}>
        <Icon name={'shopping-basket'} size={22} color={Colors.mediumCarmine} />
		<View style={[{
              width: 11,
              height: 11,
              left: 10,
              top: -18,
              backgroundColor: '#FFFFFF',
              borderRadius: 5.5
            }, {opacity : navigation.getParam('opacity') ? navigation.getParam('opacity') : 0}]}>
              <Text
              style={{
                ...commonStyles.fontRalewayBold,
                fontWeight: '600',
                fontSize: 9,
                textAlign: 'center',
                ...commonStyles.textMediumCarmine
              }}
              >{navigation.getParam('items')}</Text>
            </View>
      </TouchableOpacity>
    ),
    headerStyle: {
      ...commonStyles.fontRalewayBold,
      fontSize: 18,
      marginTop: 8,
    },
  };

    


  componentDidMount() {
    this.props.navigation.setParams({setCartVisible: this._setCartVisible })
    this.props.navigation.setParams({items: this.state.indexInCart.length })
    this.props.navigation.setParams({opacity: 0 })
  }

  state = {
    currentIndex: 0,
    shoppingCart: [],
    indexInCart: [],
    totalPrice: 0,
    cartVisible: false
  };


  _setCartVisible = () => {
    if(this.state.cartVisible == false) {
      this.setState({cartVisible: true});
    } else {
      this.setState({cartVisible: false});
    }
  }

  onPressPlus = () => {
    var indexInCart = this.state.indexInCart;

    if(indexInCart.indexOf(this.state.currentIndex) == -1) {
      let total = this.state.totalPrice;
      total += boxes[this.state.currentIndex].price;
      this.setState(() => ({totalPrice: total}));
      indexArray = this.state.indexInCart;
      indexArray.push(this.state.currentIndex);
      this.setState(() => ({ indexInCart: indexInCart }));
    } else {
      let total = this.state.totalPrice;
      total -= boxes[this.state.currentIndex].price;
      this.setState(() => ({totalPrice: total}));
      indexArray = this.state.indexInCart;
      let i = indexArray.indexOf(this.state.currentIndex);
      indexArray.splice(i, 1);
      this.setState(() => ({ indexInCart: indexInCart }));
    }
    this.props.navigation.setParams({items: this.state.indexInCart.length })
    if(this.state.indexInCart.length != 0) {
      this.props.navigation.setParams({opacity: 1 })
    } else {
      this.props.navigation.setParams({opacity: 0 })
    }
  }

  displayAddToCartButton = () => {
    if (this.state.indexInCart.indexOf(this.state.currentIndex) == -1) {
      return (<View style={styles.plusCircle}>
                <Image
                  style={styles.plus}
                  source={require('../../../../assets/images/plus.png')}
                />
              </View>);
    } else {
      return (<View style={styles.checkCircle}>
                <Image
                  style={styles.check}
                  source={require('../../../../assets/images/check.png')}
                />
              </View>);
    }
  }

  displayCartItems = () => {
    let indexArray = this.state.indexInCart;
    let i;
    let items = [];
    if (indexArray.length != 0) {
      items.push(<View
        key="hr"
        style={{
          borderBottomColor: '#E1E1E1',
          borderBottomWidth: 1,
          marginBottom: 10
        }}
      />)
      for (i = 0; i < indexArray.length; ++i) {
        items.push(
          <View key={i}>
            <View style={styles.cartItem}>
              <Text style={styles.textInCart}>{boxes[i].title}</Text>
              <Text style={styles.cartSize}>{boxes[i].size}</Text>
              <Text style={[styles.cartPrice, {top: -45}]}>{boxes[i].price} €</Text>
            </View>
            <View
              style={{
                borderBottomColor: '#E1E1E1',
                borderBottomWidth: 1,
                marginBottom: 10
              }}
            />
          </View>
        );
      }
      items.push(
        <View key="total" style={{marginTop: 24, marginBottom: 24}}>
          <Text style={styles.textInCart}>Total</Text>
          <Text style={styles.cartPrice}>{this.state.totalPrice} €</Text>
          <Text style={styles.cartTax}>*Total included VAT</Text>
        </View>
      )
      return (items);
    } else {
      return (<Text style={styles.textInCart}>No items in cart</Text>)
    }
  }

  clearCart = () => {
    this.setState(() => ({ indexInCart: [] }));
    this.props.navigation.setParams({items: this.state.indexInCart.length })
    this.props.navigation.setParams({opacity: 0 })
  }

  render() {
    const { width } = Dimensions.get('window');
    const contentOffset = (width - Carousel.WIDTH) / 2;

    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
				<View style={{height: 60}}>
          <View style={styles.bigCircle}></View>

          <View style={styles.priceTag}>
            <Text style={styles.priceText}>{boxes[this.state.currentIndex].price} €</Text>
          </View>
        </View>
				<View style={{height: 305}}>
          <SideSwipe
            shouldCapture={() => true}
            extractKey={item => item.title}
            itemWidth={Carousel.WIDTH}
            threshold={5}
            style={{ width }}
            contentContainerStyle={{  paddingTop: 20, overflow: 'visible', marginBottom: 10 }}
            data={boxes}
            contentOffset={contentOffset}
            onIndexChange={index =>
              this.setState(() => ({ currentIndex: index }))
            }
            renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
             <Carousel
                box= {item}
                index={itemIndex}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
              />
            )}
          />
        </View>
        <Animated.View style={styles.textContainer}>
          <View style={styles.textTag}>
            <Text style={styles.textTagText}>{boxes[this.state.currentIndex].tag}</Text>
          </View>
          <Text style={styles.title}>{boxes[this.state.currentIndex].title}</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{boxes[this.state.currentIndex].size}</Text>
            <View style={styles.circle}></View>
            <Text style={styles.valueText}>{boxes[this.state.currentIndex].divprice}</Text>
          </View>
          <Text style={styles.description}>{boxes[this.state.currentIndex].description}</Text>
        </Animated.View>
        <View style={styles.totalContainer}>
          <TouchableOpacity
            onPress={this.onPressPlus}
            style={{alignItems: 'center'}}
            >
            {this.displayAddToCartButton()}
          </TouchableOpacity>
          <Text style={styles.total}>TOTAL: {this.state.totalPrice}€</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.orderButton}>
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
          }}>
          <View style={styles.cartModal}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                this._setCartVisible();
              }}
              >
            </TouchableOpacity>
            <View style={{bottom: 0}}>
              <ScrollView style={styles.cart}>
                <View>
                  <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <Image
                      style={{width: 29, 
                              height: 26,
                              marginRight: 13
                            }}
                      source={require('../../../../assets/images/cart.png')}
                    />
                    <Text style={styles.textInCart}>My cart</Text>
                  </View>
                  <TouchableOpacity 
                    style={styles.clearButton}
                    onPress={() => {this.clearCart()}}
                    >
                    <Text style={styles.clearText}>Clear</Text>
                  </TouchableOpacity>
                </View>
                <View>{this.displayCartItems()}</View>
              </ScrollView>
              <View style={styles.bottom}>
                <TouchableOpacity style={styles.orderButton}>
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
  bigCircle: {
		position: 'absolute',
		width: 622,
		height: 622,
		left: -104,
		top: -321,
		borderRadius: 311,
		backgroundColor: "#FCB79A"
  },
  cart: {
    backgroundColor: '#fff', 
    padding: 20,
    height: 369,
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    overflow: 'visible'

  },
  cartModal: {
    flex:1, 
    justifyContent: 'flex-end', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  clearButton: {
    width: 62,
    height: 22,
    left: 336,
    top: -35,
    borderWidth: 1,
    borderColor: '#FCB79A',
    borderRadius: 13.5,
    marginBottom: 16
  },
  cartItem: {
    justifyContent: 'center'
  },
  cartPrice: {
    top: -25,
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
    color: '#AA3C3B'

  },
  cartTax: {
    top: -20,
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: 10,
    color: '#282828',
    textAlign: 'right'
  },
  cartSize: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 12,
    color: '#979797'
  },
  clearText: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
    color: '#FCB79A'
  },
  checkCircle: {
    width: 48,
    height: 48,
    borderWidth: 2,
    backgroundColor: '#AA3C3B',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25
  },
  check: {
    width: 23.17, 
    height: 23.17,
  },
  topBar: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop:30
  },
  topText: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#AA3C3B'
  },
  plusCircle: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#AA3C3B',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -25
  },
  plus: {
    width: 23.17, 
    height: 23.17,
  },
  textInCart: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20
  },
  total: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#AA3C3B',
    paddingTop: 16
  },
  totalContainer: {
    height: 90, 
    justifyContent: 'center',
    marginTop: 25
  },
  orderButton: {
    width: this.width,
    height: 56,
    backgroundColor: '#AA3C3B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  orderText: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'
  },
  bottom: {
    justifyContent: 'flex-end',
    height: 56
  },
  priceTag: Platform.select({
    ios: {
      position: 'absolute',
      width: 70,
      height: 70,
      left: 267,
      top: 100,
      borderRadius: 38,
      backgroundColor: '#AA3C3B',
      shadowRadius: 4,
      shadowOffset: {height: 0, width: 4},
      shadowColor: 'rgba(91, 91, 91, 0.25)'
    },
    android: {
      position: 'absolute',
      width: 75,
      height: 75,
      left: 287,
      top: 100,
      borderRadius: 38,
      backgroundColor: '#AA3C3B',
      elevation: 4
    }
  }),
  priceText: Platform.select({
    ios: {
      paddingTop: 22,
      paddingLeft: 10,
  
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
  
      color: '#FFFFFF',
    },
    android: {
      paddingTop: 22,
      paddingLeft: 10,
  
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 22,
  
      color: '#FFFFFF',
    }
  }),
  textTag: {
    width: 127,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AA3C3B',
    shadowRadius: 4,
    shadowOffset: {height: 0, width: 4},
    shadowColor: 'rgba(91, 91, 91, 0.25)',
    elevation: 4,
    borderRadius: 13.5,
    marginBottom: 17
  },
  textTagText: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',

    color: '#FFFFFF',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 180
  },
  title: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#282828'
  },
  valueContainer: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 17
  },
  circle: {
    marginTop: 6,
    marginLeft: 12,
    marginRight: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#AA3C3B'
  },
  valueText: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#979797'
  },
  description: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'center',
    color: '#282828',
    width: 280
  },
});
