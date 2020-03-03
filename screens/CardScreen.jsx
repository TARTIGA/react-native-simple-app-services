import React from 'react'
import { Text, View } from 'react-native';
import { GrayText, Button, ServiceBlock } from '../components'
import styled from 'styled-components/native';
import { Foundation, Ionicons } from '@expo/vector-icons';

const CardScreen = ({ route, navigation }) => {
    const { fullName, phone, services } = route.params;
    return (
        <Wrapper>
            <MainInfo>
                <ClientFullName>{fullName}</ClientFullName>
                <GrayText>{phone}</GrayText>
                <ButtonRow >
                    <Button width="80%" navigation={navigation} screenName={'AdditionalInfo'}>Additional Info</Button>
                    <Button bgColor="#84D269" width="45px" navigation={navigation} screenName={'ModalScreen'}>
                        <Foundation name="telephone" size={24} color="#fff" />
                    </Button>
                </ButtonRow>
            </MainInfo>
            <DetailsInfo>
                <DetailsTitle>Details</DetailsTitle>
                <ServiceBlock services={services} />
            </DetailsInfo>
        </Wrapper>
    );
}
const Wrapper = styled.View`
    flex:1;
    padding:25px;
    background-color:#fff;
`;
const MainInfo = styled.View`
    flex:0.3;
`;
const DetailsInfo = styled.View`
    flex:0.7;
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

// const ServiceCard = styled.View`
// background:#fff;
// padding:10px;
// `;

// const ServiceRow = styled.View`
// flex-direction:row;
// align-items:center;
// `;

// const ServiceCardLabel = styled.Text`
// font-size:16px;
// margin-left:10px;
// `;

// const ServicePrice = styled(ServiceCardLabel)`
// font-size:20px;
// font-weight:700;
// `;


const ButtonRow = styled.View`
    flex: 1;
    flex-direction:row;
    justify-content:space-between;
    margin-top:20px;
`;

export default CardScreen;