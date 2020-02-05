import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const Team = styled.div`
    display: block;
    margin: 8px;
`;
const ATag = styled.a`
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 8px;
    text-transform: uppercase;
    cursor: pointer;
    background: white;
    &:hover {
        background: #414141;
        color: white;
    }
`;
const TeamId = styled.div`
    font-size: 24px;
    text-align: right;
    width: 36px;
    margin-right: 16px;
`;
const LocName = styled.div`
    font-size: 14px;
`;
const NickName = styled.div`
    font-size: 20px;
`;

const Index = props => {
    console.log(props);

    return (
        <Layout>
            <h1>NHL teams</h1>
            {props.teams.map(team => (
                <Team key={team.name}>
                    <Link href="/p/[id]" as={`/p/${team.teamName}`}>
                        <ATag>
                            <TeamId>{team.id}</TeamId>
                            <div>
                                <LocName>{team.locationName}</LocName>
                                <NickName>{team.teamName}</NickName>
                            </div>
                        </ATag>
                    </Link>
                </Team>
            ))}
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
    };
};
export default Index;
