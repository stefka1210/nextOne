import Link from 'next/link';
import Franchises from '../data/franchise';
import TeamColors from '../data/TeamColors';
import styled from 'styled-components';

const FranLogo = styled.img`
    position: absolute;
    :first-child {
        left: 0px;
    }
    :last-child {
        right: 0px;
    }
    width: 25%;
    height: 25%;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    z-index: 11;
    svg {
        height: 100%;
        width: 100%;
    }
`;
const MatchComp = styled.div`
    background: #ccc;
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background: #9a9a9a;
        color: white;
        ${FranLogo} {
            transform: scale(1.2);
            transition: transform 300ms ease-in-out;
        }
    }
`;
const ATag = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: none;
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
`;
const TeamName = styled.div`
    font-size: 2rem;
    font-weight: 700;
`;
const Meta = styled.div`
    display: flex;
    font-size: 1rem;
    padding: 0px 30px;
    align-items: center;
`;
const getTeamLogo = short => {
    const teamId = Franchises.teams.find(x => x.abbreviation === `${short}`).id;
    const shortUpped = short.toUpperCase();
    const logoFileName = `${teamId}_${shortUpped}.svg`;
    return logoFileName;
};

const MatchDetail = props => {
    return (
        <MatchComp>
            <Link href="/match/[id]" as={`/match/${props.match.id}`} passHref>
                <ATag>
                    <FranLogo src={`/logos/${getTeamLogo(props.match.a)}`} alt="img-franlogo" />
                    <TeamName>{props.match.a}</TeamName>
                    <Meta>@</Meta>
                    <TeamName>{props.match.h}</TeamName>
                    <FranLogo src={`/logos/${getTeamLogo(props.match.h)}`} alt="img-franlogo" />
                </ATag>
            </Link>
        </MatchComp>
    );
};
export default MatchDetail;
