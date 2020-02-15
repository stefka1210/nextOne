import Layout from '../components/MyLayout';
import Link from 'next/link';

import fetch from 'isomorphic-unfetch';
import Franchises from '../data/franchise';
import TeamColors from '../data/TeamColors';
import styled from 'styled-components';

const TeamList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
`;
const FranLogo = styled.img`
    margin-top: 8px;
    height: 80px;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    svg {
        height: 100%;
    }
`;
const LocName = styled.div`
    font-size: 14px;
    font-size: 1.1rem;
    letter-spacing: 0em;
    transition: letter-spacing 300ms ease-in-out;
`;
const NickName = styled.div`
    font-size: 1.6rem;
    letter-spacing: 0em;
    transition: letter-spacing 300ms ease-in-out;
`;
const ColorsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    height: 14px;
    width: 40px;
`;
const Color = styled.div`
    height: 100%;
    flex: 1 1 1px;
    background: ${props => props.teamColor || 'palevioletred'};
`;
const Team = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 240px;
    height: 240px;
    background: #cccccc;
    cursor: pointer;
    &:hover {
        background: #414141;
        color: white;
        ${FranLogo} {
            transform: scale(1.2);
            transition: transform 300ms ease-in-out;
        }
        ${LocName} {
            letter-spacing: 0.08em;
            transition: letter-spacing 300ms ease-in-out;
        }
        ${NickName} {
            letter-spacing: 0.08em;
            transition: letter-spacing 300ms ease-in-out;
        }
    }
`;
const ATag = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    text-align: center;
    padding: 8px;
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
`;
const TeamId = styled.div`
    font-size: 1rem;
`;

const getTeamLogo = short => {
    const teamId = Franchises.teams.find(x => x.abbreviation === `${short}`).id;
    const shortUpped = short.toUpperCase();
    const logoFileName = `${teamId}_${shortUpped}.svg`;
    return logoFileName;
};
const getTeamColor = (teamId, colorType) => {
    const teamObj = TeamColors.find(x => x.id === teamId);
    if (colorType == 'second') {
        return teamObj.hexSecond;
    } else {
        return teamObj.hexFirst;
    }
};

const Index = props => {
    return (
        <Layout>
            <h1>NHL Teams</h1>
            <TeamList>
                {props.teams.map(team => (
                    <Team key={team.name}>
                        <Link href="/p/[id]" as={`/p/${team.teamName}`} passHref>
                            <ATag>
                                <TeamId>
                                    {team.id} - {team.abbreviation}
                                </TeamId>
                                <LocName>{team.locationName}</LocName>
                                <NickName>{team.teamName}</NickName>
                                <FranLogo
                                    src={`/logos/${getTeamLogo(team.abbreviation)}`}
                                    alt={`franlogo_${team.abbreviation}`}
                                />
                                <ColorsContainer>
                                    <Color teamColor={getTeamColor(team.id, 'first')} />
                                    <Color teamColor={getTeamColor(team.id, 'second')} />
                                </ColorsContainer>
                            </ATag>
                        </Link>
                    </Team>
                ))}
            </TeamList>
        </Layout>
    );
};
Index.getInitialProps = async function() {
    // const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
    // const data = await res.json();
    const data = Franchises;

    return {
        teams: data.teams
    };
};
export default Index;
