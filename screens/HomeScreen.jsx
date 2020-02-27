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
                time: '11:30',
                service: 'service1',
                active: true,
                user: {
                    fullName: 'Tim Roth',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            },
            {
                time: '11:33',
                service: 'service2',
                user: {
                    fullName: 'Mike Duh',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            }
        ]
    },
    {
        title: '14 September',
        data: [
            {
                time: '11:30',
                service: 'service1',
                user: {
                    fullName: 'Tim Roth',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            },
            {
                time: '11:33',
                service: 'service2',
                user: {
                    fullName: 'Mike Duh',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            }
        ]
    },
    {
        title: '15 September',
        data: [
            {
                time: '11:30',
                service: 'service1',
                user: {
                    fullName: 'Tim Roth',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            },
            {
                time: '11:33',
                service: 'service2',
                user: {
                    fullName: 'Mike Duh',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            }
        ]
    },
    {
        title: '16 September',
        data: [
            {
                time: '11:30',
                service: 'service1',
                user: {
                    fullName: 'Tim Roth',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            },
            {
                time: '11:33',
                service: 'service2',
                user: {
                    fullName: 'Mike Duh',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
                }
            }
        ]
    }]
export default function HomeScreen({ navigation }) {
    return (
        <Container>
            <SectionListContainer
                sections={DATA}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment navigate={navigation.navigate} {...item} />}
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