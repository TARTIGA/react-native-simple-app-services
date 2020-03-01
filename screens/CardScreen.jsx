import React from 'react'
import { Text, View } from 'react-native';
import { GrayText, Button } from '../components'
import styled from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';


const CardScreen = ({ route, navigation }) => {
    const { user, service } = route.params;
    return (
        <Wrapper>
            <MainInfo>
                <ClientFullName>{user.fullName}</ClientFullName>
                <GrayText>{user.phone}</GrayText>
                <ButtonRow >
                    <Button width="80%">Additional Info</Button>
                    <Button bgColor="#84D269" width="45px">
                        <Foundation name="telephone" size={24} color="white" />
                    </Button>
                </ButtonRow>
            </MainInfo>
            <DetailsInfo>
                <DetailsTitle>Details</DetailsTitle>
            </DetailsInfo>
        </Wrapper>
    );
}
const Wrapper = styled.View`
    flex:1;
    padding:25px;
`;
const MainInfo = styled.View`
    flex:0.3;
`;
const DetailsInfo = styled.View`
`;
const ClientFullName = styled.Text`
    font-weight:700;
    font-size:24px;
    line-height:30px;
    margin-bottom: 10px;
`;

const DetailsTitle = styled(ClientFullName)`
    font-size:20px;
    line-height:20px;
`;

const ButtonRow = styled.View`
    flex: 1;
    flex-direction:row;
    justify-content:space-between;
    margin-top:20px;
`;

export default CardScreen;