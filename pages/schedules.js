import Layout from '../components/MyLayout';
import SeasonSchedules from '../data/SeasonSchedule-20192020';
import Franchises from '../data/franchise';
import Link from 'next/link';
import styled from 'styled-components';

const MatchList = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
    width: 25%;
    height: 25%;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    z-index: 11;
    svg {
        height: 100%;
        width: 100%;
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
    color: inherit;
    text-decoration: none;
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
const Schedules = props => {
    return (
        <Layout>
            <h1>NHL Schedules</h1>
            <MatchList>
                {props.matches.map(match => (
                    <Match key={match.id}>
                        <Link href="/match/[id]" as={`/match/${match.id}`} passHref>
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

    // search matches in eastern-time "Today"
    const date = new Date();
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    options.timeZone = 'America/New_York';

    const easterndate = new Intl.DateTimeFormat('de-DE', options).format(date);

    // console.log('easternSearchdate:::', easterndate);
    const year = easterndate.slice(6, 10);
    const month = easterndate.slice(0, 2);
    const day = easterndate.slice(3, 5);

    const searchDate = year + month + day;
    console.log('easternDate:::', searchDate);

    /// END ---------------

    //ToDo: Eastern Standard Time
    // const date = new Date().toISOString();

    // const searchDate = date.substr(0, date.length - 14).replace(/\-/g, '');
    // console.log('searchdate:', searchDate);

    const matchesOnDate = Object.values(data).filter(entry => {
        return entry.est.indexOf(searchDate) > -1;
    });
    return {
        matches: matchesOnDate
    };
};
export default Schedules;
