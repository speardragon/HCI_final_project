/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable react-native/no-inline-styles */
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Draggable from 'react-native-draggable';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: '1',
    name: '삼성 전자',
    deadline: '22.10.31 ~ 22.11.13',
    imageURL:
      'https://www.samsung.com/sec/static/etc/designs/smg/global/imgs/logo-square-letter.png',
    url: 'samsung.jpg',
  },
  {
    id: '2',
    name: '네이버',
    deadline: '22.09.28 ~ 22.11.31',
    imageURL:
      'https://user-images.githubusercontent.com/79521972/207828297-f62a7d05-ed9d-41c5-b160-f137a2bfbc61.png',
    url: 'naver.jpg',
  },
  {
    id: '3',
    name: 'LG전자',
    deadline: '22.11.01 ~ 23.01.12',
    imageURL:
      'https://static.teamblind.com/img/channel/logo/kr/2f694fee835667.png',
    url: 'LG.png',
  },
  {
    id: '4',
    name: '카카오',
    deadline: '23.01.02 ~ 23.01.12',
    imageURL:
      'https://t1.daumcdn.net/crms/symbol_img/symbol_%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1.png',
    url: 'LG.png',
  },
];

const HomeScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  const onSave = async () => {
    try {
      // const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem('scrap', JSON.stringify(list));
    } catch (e) {
      console.error(e.message);
    }
    Alert.alert(`${list.length}개의 기업을 관심기업에 추가하셨습니다!`);
    setList([]);
  };

  useEffect(() => {}, [list.length]);

  const listComponent = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          margin: 10,
          borderWidth: 2,
          borderColor: '#B5B5B5',
          flexDirection: 'row',
          borderRadius: 20,
        }}>
        <View style={{margin: 10}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: item.imageURL}}
          />
        </View>
        <View style={{margin: 10}}>
          <Text style={{color: 'black'}}>기업명: {item.name}</Text>
          <Text style={{color: 'black'}}>모집 기간: {item.deadline}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={{backgroundColor: '#4ED27A', padding: 5}}
              onPress={() => {
                if (list.includes(item.name)) {
                  Alert.alert('이미 관심 기업에 추가하신 기업입니다!');
                } else {
                  setList([...list, item.name]);
                }

                console.log(list);
              }}>
              <Text style={{color: 'white'}}>관심기업 추가</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'gray', padding: 5}}
              onPress={() => navigation.navigate('InfoScreen')}>
              <Text style={{color: 'white'}}>상세 보기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.top}>
        <Text
          style={{
            fontSize: 20,
            color: '#4ED27A',
            marginLeft: 10,
          }}>
          일커넥션(취준생 회원)
        </Text>

        <View
          style={{
            flexDirection: 'row',
            // alignContent: 'center',
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingHorizontal: 20}}
            onPress={() => navigation.navigate('ScrapScreen')}>
            <FontAwesome
              name="star"
              size={30}
              color="#FAB005"
              style={{marginHorizontal: 10}}
            />
            <Text style={{textAlign: 'center', color: 'black'}}>관심 기업</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingRight: 20, alignItems: 'center'}}
            onPress={() => navigation.navigate('UserScreen')}>
            <FontAwesome name="user-circle" size={30} color="#4ED27A" />
            <Text style={{textAlign: 'center', color: 'black'}}>
              이력서 관리
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.search}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="기업을 검색해 주세요."
          />
        </View>
      </View> */}
      <View
        style={{
          borderBottomColor: '#F5F5F5',
          borderBottomWidth: 4,
          marginVertical: 15,
        }}
      />
      <View style={styles.flatList}>
        <FlatList
          data={DATA}
          renderItem={listComponent}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.bottom}>
        <View
          style={{
            margin: 10,
            borderWidth: 3,
            borderColor: '#4ED27A',
            borderRadius: 30,
            flex: 0.7,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: list.length !== 0 ? 'black' : 'gray',
              textAlign: 'center',
            }}>
            {list.length !== 0
              ? list.join(',')
              : '스크랩 추가 버튼으로 관심기업에 추가하세요!'}
            {/* {list} */}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            margin: 10,
            flex: 0.3,
            justifyContent: 'center',
            backgroundColor: '#4ED27A',
            alignItems: 'center',
            borderRadius: 50,
          }}
          onPress={onSave}>
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {/* <Draggable
          imageSource={require('./assets/samsung.jpg')}
          renderSize={60}
          x={sam[0]}
          y={sam[1]}
          onDragRelease={releaseImage}
          // onLongPress={() => console.log('long press')}
          onShortPressRelease={() => console.log('press drag')}
          // onPressIn={() => console.log('in press')}
          // onPressOut={() => console.log('out press')}
        />
        <Draggable
          imageSource={require('./assets/naver.jpg')}
          renderSize={60}
          x={naver[0]}
          y={naver[1]}
          onDragRelease={releaseImage}
          onLongPress={() => console.log('long press')}
          onShortPressRelease={() => console.log('press drag')}
          onPressIn={() => console.log('in press')}
          // onPressOut={() => console.log('out press')}
        />
        <Draggable
          imageSource={require('./assets/LG.png')}
          renderSize={60}
          x={lg[0]}
          y={lg[1]}
          onDragRelease={releaseImage}
          // onLongPress={() => console.log('long press')}
          // onShortPressRelease={() => console.log('press drag')}
          // onPressIn={() => console.log('in press')}
          // onPressOut={() => console.log('out press')}
        /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flex: 0.15,
  },
  flatList: {
    flex: 0.7,
  },
  bottom: {
    flex: 0.2,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
});

export default HomeScreen;
