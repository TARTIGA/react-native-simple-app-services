import React from 'react'
import styled from 'styled-components/native';

const ServiceBlock = ({ date, time, cost }) => {
    return (
        <ServiceCard style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }} >
            <ServiceRow>
                <Foundation name="clipboard-notes" size={30} color="gray" />
                {/* <ServiceCardLabel>
                    <Text style={{ fontWeight: '600' }}>{fullName}</Text>
                </ServiceCardLabel> */}
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
                    {cost}
                </ServicePrice>
            </ServiceRow>
        </ServiceCard>
    )
}

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


export default ServiceBlock;
