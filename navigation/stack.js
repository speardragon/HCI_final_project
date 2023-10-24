import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screen/FirstScreen';
import ScrapScreen from '../screen/ScrapScreen';
import HomeScreen from '../screen/HomeScreen';
import UserScreen from '../screen/UserScreen';
import InfoScreen from '../screen/InfoScreen';
import CompanyHome from '../screen/CompanyHome';
import appliScreen from '../screen/appliScreen';
import ManageScreen from '../screen/ManageScreen';
import CoScrapScreen from '../screen/CoScrapScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{headerShown: true, title: '이력서 관리'}}
      />
      <Stack.Screen
        name="ScrapScreen"
        component={ScrapScreen}
        options={{headerShown: true, title: '관심 기업'}}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{headerShown: true, title: '기업 상세 정보'}}
      />
      <Stack.Screen
        name="CompanyHome"
        component={CompanyHome}
        options={{headerShown: false, title: '기업 상세 정보'}}
      />
      <Stack.Screen
        name="appliScreen"
        component={appliScreen}
        options={{headerShown: true, title: '지원자 상세 정보'}}
      />
      <Stack.Screen
        name="ManageScreen"
        component={ManageScreen}
        options={{headerShown: true, title: '공고 관리'}}
      />
      <Stack.Screen
        name="CoScrapScreen"
        component={CoScrapScreen}
        options={{headerShown: true, title: '관심 지원자'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

/* src/navigations/Stack.js */
