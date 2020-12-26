import {Platform} from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: 'white',
      primary: 'black',
      secondary: 'gray',
      effect: 'darkorange',
      body: 'white'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    paddings: {
        containerPadding: 17,
        headerPadding: 15,
        itemPadding: 5,
    },
    gaps: {
        itemGap: 10
    }


  };
  
  export default theme;