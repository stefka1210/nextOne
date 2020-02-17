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
const Schedules = props => {
    return (
        <Layout>
            <h1>NHL Schedules</h1>
            <p>{props.searchDate}</p>
            <MatchList>
                {props.matches.map(match => (
                    <Match key={match.id} match={match} />
                ))}
            </MatchList>
        </Layout>
    );
};
Schedules.getInitialProps = async function() {
    const data = SeasonSchedules;
    const easterndate = new Date().toLocaleString('en', {
        timeZone: 'America/New_York',
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    });
    const year = easterndate.slice(6, 10);
    const month = easterndate.slice(0, 2);
    const day = easterndate.slice(3, 5);
    const searchDate = year + month + day;

    const matchesOnDate = Object.values(data).filter(entry => {
        return entry.est.indexOf(searchDate) > -1;
    });
    return {
        matches: matchesOnDate,
        searchDate: searchDate
    };
};
export default Schedules;
