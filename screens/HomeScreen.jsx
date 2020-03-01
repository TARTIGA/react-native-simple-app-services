import React from 'react';
import styled from 'styled-components/native';
import { View, Text, SectionList, Button } from 'react-native';
import { Appointment, SectionTitle } from '../components';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
    {
        title: '11 September',
        data: [
            {
                time: '10:11',
                service: 'service1',
                active: true,
                user: {
                    fullName: 'Tim Roth',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                    phone: '+777777777'
                }
            },
            {
                time: '11:33',
                service: 'service2',
                user: {
                    fullName: 'Mike Duh',
                    avatar: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
                    phone: '+7666666666'
                }
            }
        ]
    },
    {
        title: '14 September',
        data: [
            {
                time: '12:30',
                service: 'service1',
                user: {
                    fullName: 'Anabel Boom',
                    avatar: 'https://i7.pngguru.com/preview/555/703/598/computer-icons-avatar-woman-user-avatar.jpg',
                    phone: '+71111111'
                }
            },
            {
                time: '12:33',
                service: 'service2',
                user: {
                    fullName: 'Harry Potter',
                    avatar: 'https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png',
                    phone: '+7222222222'
                }
            }
        ]
    }]
const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <SectionListContainer
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionTitle >{title}</SectionTitle>
                )}
            />
            <PlusButton >
                <Ionicons name="ios-add" size={32} color="white" />
            </PlusButton>
        </Container>
    );
}

const SectionListContainer = styled.SectionList`
padding:20px;
`;
const PlusButton = styled.TouchableOpacity`
  position:absolute;
  align-items:center;
  justify-content:center;
  border-radius:50px;
  width:64px;
  height:64px;
  background:#2a86ff;
  bottom: 15px;
  right:15px;
`;

const Container = styled.View`
flex: 1;
`;

export default HomeScreen
