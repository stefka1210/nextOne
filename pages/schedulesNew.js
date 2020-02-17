import Layout from '../components/MyLayout';
import SeasonSchedules from '../data/SeasonSchedule-20192020';
import Match from '../components/Match';
import styled from 'styled-components';

const data = SeasonSchedules;

const MatchList = styled.div`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
`;

const getESTDateInSearchString = inDate => {
    //Options for Intl
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    options.timeZone = 'America/New_York';
    //Intl
    const easterndate = new Intl.DateTimeFormat('de-DE', options).format(inDate);
    //Intl-Date To SearchString Refactory
    const year = easterndate.slice(6, 10);
    const month = easterndate.slice(3, 5);
    const day = easterndate.slice(0, 2);
    const dateString = year + month + day;

    return dateString;
};

const getMatchesOnDate = (allMatches, date) => {
    const searchDate = getESTDateInSearchString(date);
    const matches = Object.values(allMatches).filter(entry => {
        return entry.est.indexOf(searchDate) > -1;
    });
    return matches;
};

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
    const date = new Date();

    // const matchesOnDate = Object.values(data).filter(entry => {
    //     return entry.est.indexOf(getESTDateInSearchString(date)) > -1;
    // });

    // const functionCheck = getMatchesOnDate(data, getESTDateInSearchString(date));
    // console.log('functionCheck:', functionCheck);

    const searchDate = getESTDateInSearchString(date);
    debugger;
    const matches = getMatchesOnDate(data, searchDate);

    return {
        searchDate,
        matches
    };
};
export default Schedules;
