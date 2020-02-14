import Layout from '../components/MyLayout';
import SeasonSchedules from '../data/SeasonSchedule-20192020';
import Franchises from '../data/franchise';
import Link from 'next/link';
import styled from 'styled-components';
// import franLogo from '/logos/1_NJD.svg';
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
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 20px;
`;
const FranLogo = styled.img`
    position: absolute;
    :first-child {
        left: 0px;
    }
    :last-child {
        right: 0px;
    }
    height: 33%;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    z-index: 11;
    svg {
        height: 100%;
    }
`;
const Match = styled.div`
    background: #ccc;

    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background: #9a9a9a;
        color: white;
        ${FranLogo} {
            transform: scale(1.2);
            transition: transform 300ms ease-in-out;
        }
    }
`;
const ATag = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: none;
    width: 100%;
    height: 100%;
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

const getTeamLogo = short => {
    const teamId = Franchises.teams.find(x => x.abbreviation === `${short}`).id;
    const shortUpped = short.toUpperCase();
    const logoFileName = `${teamId}_${shortUpped}.svg`;
    return logoFileName;
};

console.log('getTeamLogo:', getTeamLogo('BUF'));

const Schedules = props => {
    return (
        <Layout>
            <h1>NHL Schedules</h1>
            <MatchList>
                {props.matches.map(match => (
                    <Match key={match.id}>
                        <Link href="/match/[id]" as={`/match/${match.id}`}>
                            <ATag>
                                <FranLogo src={`/logos/${getTeamLogo(match.a)}`} alt="img-franlogo" />
                                <TeamName>{match.a}</TeamName>
                                <Meta>@</Meta>
                                <TeamName>{match.h}</TeamName>
                                <FranLogo src={`/logos/${getTeamLogo(match.h)}`} alt="img-franlogo" />
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
    // const searchDate = '20200212';

    const date = new Date().toISOString();
    const searchDate = date.substr(0, date.length - 14).replace(/\-/g, '');

    const matchesOnDate = Object.values(data).filter(entry => {
        return entry.est.indexOf(searchDate) > -1;
    });

    // console.log('matchesOnDate:' + matchesOnDate[0].a);

    return {
        matches: matchesOnDate
    };

    // {"id": 2019020016, "est": "20191004 14:00:00", "a": "CHI", "h": "PHI"}
};
export default Schedules;
