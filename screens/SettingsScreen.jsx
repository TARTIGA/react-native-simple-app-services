import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, SectionList, Button } from 'react-native'

const SettingsScreen = ({ navigation }) => {
    return (
        <Container>
            <Text>Some settings</Text>
        </Container>
    );
}



const Container = styled.View`
flex: 1;
padding:25px;
`;

export default SettingsScreen
