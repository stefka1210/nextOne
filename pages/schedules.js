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
                    <Match match={match} />
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
    // console.log('easternDate:::', searchDate);

    const matchesOnDate = Object.values(data).filter(entry => {
        return entry.est.indexOf(searchDate) > -1;
    });
    return {
        matches: matchesOnDate,
        searchDate: searchDate
    };
};
export default Schedules;
