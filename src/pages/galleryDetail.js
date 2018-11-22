import React, { Component } from 'react';
import { Dimensions, View, Text, Image } from 'react-native';

export default class GalleryDetail extends Component {

    constructor (props) {
        super(props);     
    }

    render() {
        const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

        return (
        <View style="{flex: 1}">
            <Image
                style={{width: viewportWidth, height: viewportHeight * 0.30}} 
                source={{ uri: this.props.navigation.getParam("illustration") }}
                />
        </View>
      );
    }
  }