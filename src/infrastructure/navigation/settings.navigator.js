import React from "react";

import { SettingsScreen } from "../../features/setting/screens/settings.screen";
import { CameraScreen } from "../../features/setting/screens/camera.screen";

import {
  createNativeStackNavigator,
  //   CardStyleInterpolators,
} from "@react-navigation/native-stack";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      //   screenOptions={{
      //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      //   }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
