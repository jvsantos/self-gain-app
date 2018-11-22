import React, { Component } from 'react';
import { Dimensions, Platform, View, ScrollView, Text, StatusBar, SafeAreaView, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class GalleryChoice extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
        this.navi = this.props.navigation;
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} navigation={this.props.navigation} />;
    }

    layoutExample (number, title, type) {
        const isTinder = type === 'tinder';
        const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

        return (
            
            <View  style={{ flex: 1 }} >
                {/* <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text> */}
                {/* <Carousel
                  data={isTinder ? ENTRIES2 : ENTRIES1}
                  renderItem={this._renderItem.bind(this) }
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={{ flex: 1 }}
                  slideStyle={{ flex: 1 }}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={type}
                  loop={true}
                  navigation={this.props.navigation}
                /> */}
                <Carousel
                    data={isTinder ? ENTRIES2 : ENTRIES1}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    slideStyle={{ width: viewportWidth }}
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    navigation={this.props.navigation}
                    />
            </View>
        );
    }

    render () {
        // const example1 = this.mainExample(4, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        // const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');
        // const example3 = this.layoutExample(3, '"Stack of cards" layout | Loop', 'stack');
        const example4 = this.layoutExample(4, 'Escolha uma das categorias pra votar');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>                    
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >                        
                        { example4 }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

