import { createStackNavigator } from 'react-navigation'; 

import Main from './pages/main';
import GalleryChoice from './pages/galleryChoice';
import GalleryDetail from './pages/galleryDetail';

export default createStackNavigator (
    {
        Gallery: {
            screen: GalleryChoice,
            navigationOptions: ({ navigation }) => ({
                headr: null
              }),
        },
        GalleryDetail: {
            screen: GalleryDetail,
            navigationOptions: ({ navigation }) => ({
                title: `Categoria ${navigation.state.params.title}`,
                subtitle: navigation.state.params.subtitle,
                illustration: navigation.state.params.illustration
              }),
        },
    },    
    {
        initialRouteName: "Gallery"
    }
);