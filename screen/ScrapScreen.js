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
    id: '2',
    name: '네이버',
    deadline: '22.09.28 ~ 22.11.31',
    imageURL:
      'https://user-images.githubusercontent.com/79521972/207828297-f62a7d05-ed9d-41c5-b160-f137a2bfbc61.png',
    url: 'naver.jpg',
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

const ScrapScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const listComponent = ({item}) => {
    return (
      <View>
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
                  Alert.alert('관심기업에서 해제하셨습니다!');
                }}>
                <Text style={{color: 'white'}}>관심기업 해제</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{backgroundColor: 'gray', padding: 5}}
                onPress={() => {
                  navigation.navigate('InfoScreen');
                }}>
                <Text style={{color: 'white'}}>상세 보기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
        강창룡 님의 관심 기업
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
