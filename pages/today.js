import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {
    console.log('Hier:::::::::', props);
    // return null;
    return (
        <Layout>
            <h1>NHL matches</h1>
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
Index.getInitialProps = async function() {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const res = await fetch('http://live.nhl.com/GameData/SeasonSchedule-20192020.json');
    const data = await res.json();

    console.log(`team data fetched. Count: ${data.length}`);

    // const matchesToday = data.filter(function(entry) {
    //     return entry.est == '20200204 19:00:00';
    // });

    const searchDate = '20200204';

    const matchesToday = data.filter(function(entry) {
        return entry.est.indexOf(searchDate) > -1;
    });

    console.log('matchesToday::::', matchesToday.length);

    return {
        // matches: data
        // matches: data.find(entry => entry['est' === '20200204'])
        matches: matchesToday
        // teams: data.length
    };
    //Beispiel
    // {"id":2019020814,"est":"20200204 19:00:00","a":"VGK","h":"TBL"}
};
export default Index;
