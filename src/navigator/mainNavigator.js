import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings21167525Navigator from '../features/Settings21167525/navigator';
import CalendarView22167524Navigator from '../features/CalendarView22167524/navigator';
import Camera23167523Navigator from '../features/Camera23167523/navigator';
import Feed24167522Navigator from '../features/Feed24167522/navigator';
import Maps25167521Navigator from '../features/Maps25167521/navigator';
import Settings167506Navigator from '../features/Settings167506/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings21167525: { screen: Settings21167525Navigator },
CalendarView22167524: { screen: CalendarView22167524Navigator },
Camera23167523: { screen: Camera23167523Navigator },
Feed24167522: { screen: Feed24167522Navigator },
Maps25167521: { screen: Maps25167521Navigator },
Settings167506: { screen: Settings167506Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
