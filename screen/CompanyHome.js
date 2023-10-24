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
    name: '강창룡',
    hope: '백엔드 개발자',
    imageURL:
      'https://img.asiatoday.co.kr/file/2022y/04m/12d/2022041201001080400062081.jpg',
    url: 'samsung.jpg',
  },
  {
    id: '2',
    name: '홍길동',
    hope: '마케팅',
    imageURL:
      'https://file.mk.co.kr/meet/neds/2020/12/image_readtop_2020_1324213_16091064624482220.jpg',
    url: 'naver.jpg',
  },
  {
    id: '3',
    name: '김지민',
    hope: '반도체 설비',
    imageURL:
      'https://file2.nocutnews.co.kr/newsroom/image/2022/10/01/202210011638156548_0.jpg',
    url: 'LG.png',
  },
  {
    id: '4',
    name: '박지만',
    hope: 'devOps 엔지니어',
    imageURL:
      'https://img.etoday.co.kr/pto_db/2021/03/20210316105212_1594270_588_882.png',
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
    Alert.alert(`${list.length}분의 이력서를 관심지원자에 추가하셨습니다!`);
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
          <Text style={{color: 'black'}}>이름: {item.name}</Text>
          <Text style={{color: 'black'}}>희망 직군: {item.hope}</Text>
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
                  Alert.alert('이미 관심 지원자에 추가하신 분입니다!');
                } else {
                  setList([...list, item.name]);
                }

                console.log(list);
              }}>
              <Text style={{color: 'white'}}>관심지원자 추가</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'gray', padding: 5, marginLeft: 20}}
              onPress={() => navigation.navigate('appliScreen')}>
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
          일커넥션(기업 회원)
        </Text>

        <View
          style={{
            flexDirection: 'row',
            // alignContent: 'center',
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{paddingHorizontal: 20, alignItems: 'center'}}
            onPress={() => navigation.navigate('CoScrapScreen')}>
            <FontAwesome
              name="star"
              size={30}
              color="#FAB005"
              style={{marginHorizontal: 10}}
            />
            <Text style={{textAlign: 'center', color: 'black'}}>
              관심 지원자
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingRight: 20, alignItems: 'center'}}
            onPress={() => navigation.navigate('ManageScreen')}>
            <FontAwesome name="building" size={30} color="#4ED27A" />
            <Text style={{textAlign: 'center', color: 'black'}}>공고 관리</Text>
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
              : '스크랩 추가 버튼으로 관심 지원자에 추가하세요!'}
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
