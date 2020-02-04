import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {
    console.log(props);
    // return null;
    return (
        <Layout>
            <h1>NHL teams</h1>
            <ul>
                {props.teams.map(team => (
                    <li key={team.name}>
                        <Link href="/p/[id]" as={`/p/${team.teamName}`}>
                            <a>
                                <div>{team.locationName}</div>
                                <div>{team.teamName}</div>
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
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
    const data = await res.json();

    console.log(`team data fetched. Count: ${data.teams}`);

    return {
        teams: data.teams
        // teams: data.length
    };
};
export default Index;
