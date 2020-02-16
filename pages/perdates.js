import React, {useState} from 'react';
import Layout from '../components/MyLayout';
import SeasonSchedules from '../data/SeasonSchedule-20192020';
import Match from '../components/Match';
import styled from 'styled-components';

const MatchList = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
`;

const Panel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    padding: 5px;
`;
const Count = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    padding: 20px;
`;

const PerDates = props => {
    const [dateOffset, setDateOffset] = useState(0);
    const oneDay = 24 * 60 * 60 * 1000;
    const date = new Date(Date.now() + oneDay * dateOffset);

    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    options.timeZone = 'America/New_York';

    const easterndate = new Intl.DateTimeFormat('de-DE', options).format(date);

    const year = easterndate.slice(6, 10);
    const month = easterndate.slice(0, 2);
    const day = easterndate.slice(3, 5);

    const initialSearchDate = year + month + day;

    return (
        <Layout>
            <h1>NHL PerDates</h1>
            <Panel>
                <Button onClick={() => setDateOffset(dateOffset - 1)}>down</Button>
                <Count>
                    <div>{dateOffset}</div>
                    <div>{easterndate}</div>
                    <div>{initialSearchDate}</div>
                </Count>
                <Button onClick={() => setDateOffset(dateOffset + 1)}>up</Button>
            </Panel>
        </Layout>
    );
};

export default PerDates;
