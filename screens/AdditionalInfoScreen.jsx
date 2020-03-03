import React from 'react'
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Foundation, Ionicons } from '@expo/vector-icons';


const AdditionalInfoScreen = ({ route, navigation }) => {
    // const { fullName, phone, services } = route.params;
    return (
        <Wrapper>
            <Text>AdditionalInfoScreen</Text>
        </Wrapper>
    );
}
const Wrapper = styled.View`
    flex:1;
    padding:25px;
    background-color:#fff;
`;

export default AdditionalInfoScreen;