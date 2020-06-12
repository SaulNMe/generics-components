import Fonts from './Fonts';
import Colors from './Colors';
import Metrics from './Metrics';
import { Platform, StatusBar } from 'react-native';
const ApplicationStyles = {
  screen: {
    container: {
      flex: 1,
      backgroundColor: Colors.bgColor
    },
    absolute: { position: 'absolute' },
    imageFill: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: null,
      height: null
    },
    fill: {
      width: '100%',
      height: '100%'
    },
    headerSpace: {
      paddingTop: Metrics.navBarHeight
    },
    card: {
      flex: 1,
      marginBottom: Metrics.smallMargin,
      backgroundColor: Colors.white,
      shadowColor: '#000',
      shadowRadius: 4,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 3 },
      borderRadius: 5,
      elevation: 1
    },
    imageViewContainer: {
      height: Metrics.imageViewHeight
    },
    mainTitle: {
      backgroundColor: Colors.white,
      marginTop: 24,
      marginBottom: 10,
      paddingLeft: Metrics.baseMargin,
      paddingTop: 10,
      paddingBottom: 12
    },
    KeyboardAvoidingViewStyle: {
      flex: 1,
      height: '100%',
      justifyContent: 'space-around',
      position: 'absolute',
      top: 0,
      width: '100%'
    },
    sizeImage: {
      width: 48,
      height: 48,
      borderRadius: 5
    },
    bgWhite: {
      backgroundColor: Colors.white
    },
    bottomBtn: {
      position: 'absolute',
      bottom: 0,
      width: '90%'
    }
  },
  margins: {
    bigTopMargin: {
      marginTop: Metrics.bigMargin
    },
    bigLeftMargin: {
      marginLeft: Metrics.bigMargin
    },
    doubleHorizontalMargin: {
      marginHorizontal: Metrics.doubleBaseMargin
    },
    smallestVerticalMargin: {
      marginVertical: Metrics.smallestMargin
    },
    smallHorizontalMargin: {
      marginHorizontal: Metrics.smallMargin
    },
    smallestHorizontalMargin: {
      marginHorizontal: Metrics.smallestMargin
    },
    doubleVerticalMargin: {
      marginVertical: Metrics.doubleBaseMargin
    },
    baseHorizontalMargin: {
      marginHorizontal: Metrics.baseMargin
    },
    baseVerticalMargin: {
      marginVertical: Metrics.baseMargin
    },
    smallVerticalMargin: {
      marginVertical: Metrics.smallMargin
    },
    noHorizontalMargin: {
      marginHorizontal: 0
    },
    smallTopPadding: {
      paddingTop: Metrics.smallMargin
    },
    baseTopPadding: {
      paddingTop: Metrics.baseMargin
    },
    smallBottomPadding: {
      paddingBottom: Metrics.smallMargin
    },
    smallHorizontalPadding: {
      paddingHorizontal: Metrics.smallMargin
    },
    smallVerticalPadding: {
      paddingVertical: Metrics.smallMargin
    },
    paddingAround: {
      padding: Metrics.baseMargin
    },
    marginAround: {
      margin: Metrics.baseMargin
    },
    baseVerticalPadding: {
      paddingVertical: Metrics.baseMargin
    },
    baseHorizontalPadding: {
      paddingHorizontal: Metrics.baseMargin
    },
    smallTopMargin: {
      marginTop: Metrics.smallMargin
    },
    baseTopMargin: {
      marginTop: Metrics.baseMargin
    },
    doubleTopMargin: {
      marginTop: Metrics.doubleBaseMargin
    },
    smallestBottomMargin: {
      marginBottom: Metrics.smallestMargin
    },
    baseBottomMargin: {
      marginBottom: Metrics.baseMargin
    },
    baseBottomPadding: {
      paddingBottom: Metrics.baseMargin
    },
    doubleBottomPadding: {
      paddingBottom: Metrics.doubleBaseMargin
    },
    doubleBottomMargin: {
      marginBottom: Metrics.doubleBaseMargin
    },
    smallBottomMargin: {
      marginBottom: Metrics.smallMargin
    },
    baseLeftMargin: {
      marginLeft: Metrics.baseMargin
    },
    baseRightMargin: {
      marginRight: Metrics.baseMargin
    },
    smallLeftMargin: {
      marginLeft: Metrics.smallMargin
    },
    smallRightMargin: {
      marginRight: Metrics.smallMargin
    },
    statusBarSpace: {
      paddingTop: Platform.OS != 'ios' ? StatusBar.currentHeight : 0
    },
    navBarHeight: {
      height: Metrics.navBarHeight
    }
  },
  flexBox: {
    row: {
      flexDirection: 'row'
    },
    antiRow: {
      flexDirection: 'row-reverse'
    },
    flex1: {
      flex: 1
    },
    flex2: {
      flex: 2
    },
    flexWrap: {
      flexWrap: 'wrap'
    },
    justifyContentFlexStart: {
      justifyContent: 'flex-start'
    },
    justifyContentFlexEnd: {
      justifyContent: 'flex-end'
    },
    justifyContentCenter: {
      justifyContent: 'center'
    },
    justifyContentSpaceBetween: {
      justifyContent: 'space-between'
    },
    justifyContentSpaceAround: {
      justifyContent: 'space-around'
    },
    justifyContentSpaceEvenly: {
      justifyContent: 'space-evenly'
    },
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    alignItemsFlexEnd: {
      alignItems: 'flex-end'
    },
    alignSelfStart: {
      alignSelf: 'flex-start'
    },
    alignSelfEnd: {
      alignSelf: 'flex-end'
    },
    alignSelfCenter: {
      alignSelf: 'center'
    },
    fullWidth: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    }
  },
  bottomTabNavigatorOptions: {
    activeTintColor: Colors.white,
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: Colors.darkest
    }
  },
  stackNavigatorOptions: {
    headerStyle: {
      backgroundColor: '#ffffff'
    }
  }
};

export default ApplicationStyles;
