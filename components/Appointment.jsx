import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Appointment = ({ user, service, active, time, navigate }) => {
    return (
        <GroupItem onPress={() => navigate('CardScreen')}>
            <Avatar source={{ uri: user.avatar }} />
            <View style={{ flex: 1 }}>
                <FullName>{user.fullName}</FullName>
                <GrayText>{service}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
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

const GrayText = styled.Text`
font-size:16px;
color:gray;
`;

const GroupDate = styled.Text`
background:${props => (props.active ? '#2A86FF' : '#e9f6ff')};
color:${props => (props.active ? '#fff' : '#4294ff')};
border-radius:18px;
font-weight:600;
font-size:14px;
width:70px;
height:32px;
text-align:center;
line-height:28px;
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