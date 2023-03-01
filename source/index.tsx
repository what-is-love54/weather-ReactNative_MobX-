/** @format */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
// const
import { colors, IS_DARK_MODE } from '~/constants';
// utils
import './services/i18n';
import { navigationRef } from '~/utils';
import { useAppInit } from '~/hooks';
// nav
import { RootNavigation } from '~/navigation/rootNavigation';

enableScreens();

export const App: React.FC<any> = () => {
  const { isInitLoading } = useAppInit();

  if (isInitLoading) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        barStyle={IS_DARK_MODE ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor={IS_DARK_MODE ? colors._black_rgb : colors._white_rgb}
      />
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
