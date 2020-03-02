import React from 'react'
import { Text, View } from 'react-native';
import { GrayText, Button } from '../components'
import styled from 'styled-components/native';
import { Foundation, Ionicons } from '@expo/vector-icons';


const CardScreen = ({ route, navigation }) => {
    const { user, service, time, date } = route.params;
    return (
        <Wrapper>
            <MainInfo>
                <ClientFullName>{user.fullName}</ClientFullName>
                <GrayText>{user.phone}</GrayText>
                <ButtonRow >
                    <Button width="80%">Additional Info</Button>
                    <Button bgColor="#84D269" width="45px">
                        <Foundation name="telephone" size={24} color="#fff" />
                    </Button>
                </ButtonRow>
            </MainInfo>
            <DetailsInfo>
                <DetailsTitle>Details</DetailsTitle>
                <ServiceCard style={{
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    shadowColor: '#000',
                    shadowOffset: { height: 1, width: 0 },
                }} >
                    <ServiceRow>
                        <Foundation name="clipboard-notes" size={30} color="gray" />
                        <ServiceCardLabel>
                            ServiceName:
                            <Text style={{ fontWeight: '600' }}>{service.name}</Text>
                        </ServiceCardLabel>
                    </ServiceRow>
                    <ServiceRow>
                        <Foundation name="calendar" size={30} color="gray" />
                        <ServiceCardLabel>
                            {date}
                        </ServiceCardLabel>
                    </ServiceRow>
                    <ServiceRow>
                        <Ionicons name="md-time" size={24} color="gray" />
                        <ServiceCardLabel>
                            {time}
                        </ServiceCardLabel>
                    </ServiceRow>
                    <ServiceRow>
                        <Foundation name="dollar" size={30} color="gray" />
                        <ServicePrice>
                            {service.price}
                        </ServicePrice>
                    </ServiceRow>
                </ServiceCard>
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
flex:1;
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

const ServiceCard = styled.View`
background:#fff;
padding:10px;
`;

const ServiceRow = styled.View`
flex-direction:row;
align-items:center;
`;

const ServiceCardLabel = styled.Text`
font-size:16px;
margin-left:10px;
`;

const ServicePrice = styled(ServiceCardLabel)`
font-size:20px;
font-weight:700;
`;


const ButtonRow = styled.View`
    flex: 1;
    flex-direction:row;
    justify-content:space-between;
    margin-top:20px;
`;

export default CardScreen;