import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
// import AsyncStorage from '@react-native-community/async-storage';

const UserScreen = ({navigation}) => {
  const tableData = {
    tableHead: ['주최 기간', '취득 날짜', '세부 내용'],
    tableData: [
      ['한이음', '2022.12.03', '한국정보산업연합회장상'],
      ['', '', '', ''],
    ],
    widthArr: [160, 180, 200],
  };
  const skillData = {
    tableHead: ['스킬', '활용 가능 정도', '세부 내용'],
    tableData: [
      ['Excel', '50%', '자격증 보유'],
      ['NodeJS', '90%', '2개 프로젝트 진행 경험 보유'],
      ['react native', '80%', '2개 프로젝트 진행 경험 보유'],
    ],
    widthArr: [160, 180, 200],
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{borderWidth: 1, borderColor: 'gray', margin: 20}}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 10,
          }}>
          <FontAwesome
            name="pencil"
            size={30}
            color="#FAB005"
            style={{marginHorizontal: 10}}
          />
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
            }}>
            이력서 수정
          </Text>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-evenly',
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: 'https://img.asiatoday.co.kr/file/2022y/04m/12d/2022041201001080400062081.jpg',
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                marginLeft: 5,
                textAlign: 'center',
                marginBottom: 10,
              }}>
              밥값하는 엔지니어,
            </Text>
            <Text style={{color: 'black', marginLeft: 5, fontSize: 18}}>
              강창룡입니다.
            </Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="cake"
              size={30}
              color="black"
              style={{marginHorizontal: 5}}
            />
            <Text style={{color: 'black'}}>2000년 12월 16일 (만 22세)</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign
              name="mail"
              size={30}
              color="black"
              style={{marginHorizontal: 5}}
            />
            <Text style={{color: 'black'}}>rkdckdfyyd@naver.com</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="cellphone"
              size={30}
              color="black"
              style={{marginHorizontal: 5}}
            />
            <Text style={{color: 'black'}}>010-1111-2222</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 4,
            marginVertical: 15,
          }}
        />
        <View style={{margin: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>수상 경력</Text>
          <ScrollView horizontal={true}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={tableData.tableHead}
                style={styles.head}
                textStyle={styles.text}
                widthArr={tableData.widthArr}
              />
              <Rows
                data={tableData.tableData}
                textStyle={styles.text}
                widthArr={tableData.widthArr}
              />
            </Table>
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 4,
            marginVertical: 15,
          }}
        />
        <View style={{margin: 10}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>기술 스택</Text>
          <ScrollView horizontal={true}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={skillData.tableHead}
                style={styles.head}
                textStyle={styles.text}
                widthArr={skillData.widthArr}
              />
              <Rows
                data={skillData.tableData}
                textStyle={styles.text}
                widthArr={skillData.widthArr}
              />
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              '불합격 여부 확인 메세지',
              '정말로 해당 지원자를 불합격처리 하시겠습니까?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                },
                {
                  text: 'OK',
                  onPress: () => {
                    Alert.alert('해당 지원자에 대해 불합격처리가 되었습니다.');
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <Octicons
            name="x-circle-fill"
            size={30}
            color="red"
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              '합격 여부 확인 메세지',
              '정말로 해당 지원자를 합격처리 하시겠습니까?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {},
                },
                {
                  text: 'OK',
                  onPress: () => {
                    Alert.alert('해당 지원자에 대해 합격처리가 되었습니다.');
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <AntDesign
            name="checkcircle"
            size={30}
            color="green"
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

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

  header: {height: 50, backgroundColor: '#537791'},

  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, color: 'black'},
});
