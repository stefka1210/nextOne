import Layout from '../components/MyLayout';
import SeasonSchedules from '../data/SeasonSchedule-20192020';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// const SeasonSchedules = [
//     {id: 2019020001, est: '20191002 19:00:00', a: 'OTT', h: 'TOR'},
//     {id: 2019020002, est: '20191002 20:00:00', a: 'WSH', h: 'STL'},
//     {id: 2019020003, est: '20191002 22:00:00', a: 'VAN', h: 'EDM'},
//     {id: 2019020034, est: '20191007 19:00:00', a: 'STL', h: 'TOR'},
//     {id: 2019020035, est: '20191007 19:00:00', a: 'BUF', h: 'CBJ'},
//     {id: 2019020036, est: '20191008 19:00:00', a: 'CAR', h: 'FLA'}
// ];

const Schedules = props => {
    // console.log('Hier Props >>>>>>', props);
    return (
        <Layout>
            <h1>NHL Schedules</h1>
            <ul>
                {props.matches.map(match => (
                    <li key={match.id}>
                        <Link href="/p/[id]" as={`/p/${match.id}`}>
                            <a>
                                <div>{match.a}</div>
                                <div>{match.h}</div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};
Schedules.getInitialProps = async function() {
    const data = SeasonSchedules;
    const searchDate = '20200212';

    const matchesOnDate = Object.values(data).filter(function(entry) {
        return entry.est.indexOf(searchDate) > -1;
    });

    return {
        matches: matchesOnDate
    };
};
export default Schedules;
