import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const TeamList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
`;
const Team = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 240px;
    background: #cccccc;
    cursor: pointer;
    &:hover {
        background: #414141;
        color: white;
    }
`;
const ATag = styled.a`
    font-weight: 700;
    text-align: center;
    padding: 8px;
    text-transform: uppercase;
`;
const TeamId = styled.div`
    font-size: 1.2rem;
`;
const LocName = styled.div`
    font-size: 14px;
    font-size: 1.3rem;
`;
const NickName = styled.div`
    font-size: 1.7rem;
`;

const Index = props => {
    console.log(props);

    return (
        <Layout>
            <h1>NHL Teams</h1>
            <TeamList>
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
            </TeamList>
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
