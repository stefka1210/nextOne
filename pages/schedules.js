import Layout from '../components/MyLayout';
import SeasonSchedules from '../data/SeasonSchedule-20192020';
import Link from 'next/link';
import styled from 'styled-components';
// import fetch from 'isomorphic-unfetch';

// const SeasonSchedules = [
//     {id: 2019020001, est: '20191002 19:00:00', a: 'OTT', h: 'TOR'},
//     {id: 2019020002, est: '20191002 20:00:00', a: 'WSH', h: 'STL'},
//     {id: 2019020003, est: '20191002 22:00:00', a: 'VAN', h: 'EDM'},
//     {id: 2019020034, est: '20191007 19:00:00', a: 'STL', h: 'TOR'},
//     {id: 2019020035, est: '20191007 19:00:00', a: 'BUF', h: 'CBJ'},
//     {id: 2019020036, est: '20191008 19:00:00', a: 'CAR', h: 'FLA'}
// ];

const MatchList = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(480px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    gap: 20px;
`;
const Match = styled.div`
    width: 480px;
    background: #ccc;

    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ATag = styled.a`
    display: flex;
    align-items: center;
    text-transform: none;
`;
const TeamName = styled.div`
    font-size: 2rem;
    font-weight: 700;
`;
const Meta = styled.div`
    display: flex;
    font-size: 1rem;
    padding: 0px 30px;
    align-items: center;
`;

const Schedules = props => {
    return (
        <Layout>
            <h1>NHL Schedules</h1>
            <MatchList>
                {props.matches.map(match => (
                    <Match key={match.id}>
                        <Link href="/match/[id]" as={`/match/${match.id}`}>
                            <ATag>
                                <TeamName>{match.a}</TeamName>
                                <Meta>@</Meta>
                                <TeamName>{match.h}</TeamName>
                            </ATag>
                        </Link>
                    </Match>
                ))}
            </MatchList>
        </Layout>
    );
};
Schedules.getInitialProps = async function() {
    const data = SeasonSchedules;
    const searchDate = '20200213';

    const matchesOnDate = Object.values(data).filter(function(entry) {
        return entry.est.indexOf(searchDate) > -1;
    });

    console.log('matchesOnDate:' + matchesOnDate[0].a);

    return {
        matches: matchesOnDate
    };
};
export default Schedules;
