import { createStackNavigator } from 'react-navigation'; 

import Main from './pages/main';
import GalleryChoice from './pages/galleryChoice';
import GalleryDetail from './pages/galleryDetail';

const navigationOptions = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headrTintColor: "#fff"
    }
};

export default createStackNavigator (
    {
        GalleryChoice,
        GalleryDetail,
        Main
    }, 
    navigationOptions,
    {
        initialRouteName: "GalleryDetail"
    }
);