import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

const ManageScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://user-images.githubusercontent.com/79521972/207828297-f62a7d05-ed9d-41c5-b160-f137a2bfbc61.png',
          }}
        />

        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black'}}>기업명: 네이버</Text>
          <Text style={{color: 'black'}}>모집 기간: 22.09.28 ~ 22.11.31</Text>
          <Text style={{color: 'black'}}>창립일: 1999.06.02</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#16ef72',
              borderRadius: 20,
              width: 100,
              marginVertical: 20,
              marginLeft: 170,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {}}>
            <Text
              style={{
                color: 'black',
                marginTop: 5,
                textAlign: 'center',
              }}>
              수정하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{margin: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          부서 소개
        </Text>
        <Text style={{color: 'black', marginTop: 5}}>
          SNOW 카메라 서비스의 서버 개발을 담당하고 있으며, 서비스의 백엔드, 웹
          프론트, 데이터 수집/통계 및 서비스 인프라를 전반적으로 관리하는
          부서입니다. AI/3D/GAN/WEB3 등의 선행 학습을 통한 기술의 서비스화를
          담당하고 있으며, SNOW/B612/Foodie/SODA/VITA/GlowUp과 같은 SNOW 글로벌
          카메라 서비스에 다양한 웹 프론트 기술을 개발/적용할 우수 인재분들을
          모집하고 있습니다.
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          담당 업무
        </Text>
        <Text style={{color: 'black', marginTop: 5}}>
          - 서비스 전반적인 웹 프론트 부분에 대한 개발 및 리딩
        </Text>
        <Text style={{color: 'black', marginTop: 5}}>
          - 서비스에서 필요한 웹 프론트 기술의 개발 및 협업을 통한 다양한 서비스
          적용 및 관리
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          부서 소개
        </Text>
        <Text style={{color: 'black', marginTop: 5}}>
          {`- 웹 프론트엔드 개발 실무 3년 이상이신 분
- 웹 개발에 대한 이해가 있으신 분 (Web, Front/Back-End, DB, API 개발)
- 웹 프론트 기술 및 개발 리딩이 가능하신 분
- 프론트엔드의 다양한 기술 및 개발 경험이 있으신 분 (JavaScript, React, Vue, Angular 등)
- Java 기반의 Spring/Boot 개발 경험이 있으신 분
- CI/CD/GIT등을 통한 개발이 가능하신 분
- 네트워크 관련 지식 및 기본적인 Linux/Unix 명령 사용 능력을 갖추신 분`}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ManageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
