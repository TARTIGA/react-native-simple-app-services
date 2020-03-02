import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { GrayText } from '../components'
import styled from 'styled-components/native';

const Appointment = ({ item, navigate }) => {
    const { user, service, active, time } = item
    return (
        <GroupItem onPress={() => navigate('CardScreen', item)}>
            <Avatar source={{ uri: user.avatar }} />
            <View style={{ flex: 1 }}>
                <FullName>{user.fullName}</FullName>
                <GrayText>{service.name}</GrayText>
            </View>
            <GroupDate active={active}>
                <GroupDateText active={active}>{time}</GroupDateText>
            </GroupDate>
        </GroupItem>
    );
};

Appointment.defaultProps = {
    title: 'Untitled',
    items: []
}

const FullName = styled.Text`
font-weight:600;
font-size:16px;
`;

const GroupDate = styled.View`
background:${props => (props.active ? '#2A86FF' : '#e9f6ff')};
border-radius:30px;
font-weight:600;
font-size:14px;
width:100px;
height:32px;
text-align:center;
line-height:28px;
align-items:center;
justify-content:center;
`;

const GroupDateText = styled.Text`
color:${props => (props.active ? '#fff' : '#2A86FF')};
font-weight:600;
font-size:14px;
text-align:center;
`;

const GroupItem = styled.TouchableOpacity`
align-items:center;
padding:20px 0;
flex-direction:row;
border-bottom-width:1px;
border-bottom-color:#f3f3f3;
`;

const Avatar = styled.Image`
border-radius:50px; 
width:40px; 
height:40px;
margin-right:15px;`
    ;

export default Appointment;