import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

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
    id: '3',
    name: '김지민',
    hope: '반도체 설비',
    imageURL:
      'https://file2.nocutnews.co.kr/newsroom/image/2022/10/01/202210011638156548_0.jpg',
    url: 'LG.png',
  },
];

const ScrapScreen = ({navigation}) => {
  const [list, setList] = useState([]);
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
              <Text style={{color: 'white'}}>관심지원자 해제</Text>
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
    <View style={{}}>
      <Text
        style={{
          color: 'black',
          margin: 10,
          fontSize: 25,
        }}>
        네이버 님의 관심 지원자
      </Text>
      <FlatList
        data={DATA}
        renderItem={listComponent}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ScrapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
