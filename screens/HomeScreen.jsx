import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, SectionList, Button } from 'react-native'
import { Appointment, SectionTitle } from '../components'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { DATA } from '../api'

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const API = "https://jsonplaceholder.typicode.com/posts";
        axios.get(API).then(({ data }) => {
            setData(DATA);
        });
    }, []);
    return (
        <Container>
            {data && (<SectionListContainer
                sections={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => <Appointment navigate={navigation.navigate} item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionTitle>{title}</SectionTitle>
                )}
            />)}
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
