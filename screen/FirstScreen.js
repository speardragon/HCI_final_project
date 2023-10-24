/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FirstScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <View style={{flex: 0.9, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: 'black', textAlign: 'center'}}>
          구인구직 어플
        </Text>
        <Text style={{fontSize: 40, color: '#71CA5B', textAlign: 'center'}}>
          일커넥션입니다.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: '#71CA5B',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          취준생 회원 로그인
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: 'white',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#71CA5B',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('CompanyHome')}>
        <Text
          style={{
            color: '#71CA5B',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          기업 회원 로그인
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#71CA5B" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FirstScreen;
