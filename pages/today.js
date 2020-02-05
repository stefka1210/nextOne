import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Today = props => {
    console.log('Hier Props >>>>>>', props);
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
Today.getInitialProps = async function() {
    const res = await fetch('http://live.nhl.com/GameData/SeasonSchedule-20192020.json');
    const data = await res.json();

    const searchDate = '20200204';

    const matchesOnDate = data.filter(function(entry) {
        return entry.est.indexOf(searchDate) > -1;
    });

    console.log('matchesToday::::', matchesOnDate.length);

    return {
        matches: matchesOnDate
    };

    //Beispiel
    // {"id":2019020814,"est":"20200204 19:00:00","a":"VGK","h":"TBL"}
};
export default Today;
