import Layout from '../../components/MyLayout';
import SeasonSchedules from '../../data/SeasonSchedule-20192020';
import Franchises from '../../data/franchise';
import TeamColors from '../../data/TeamColors';
// import MatchDetail from '../components/MatchDetail';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

const Meta = styled.div`
    display: flex;
    font-size: 1rem;
`;
const PageContent = styled.div`
    width: 100%;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
    grid-template-columns: 832px 384px;
    gap: 64px;
`;
const MatchWrapper = styled.div`
    width: 100%;
    min-height: 320px;
    background: #f2f2f2;
    /* height: 80vh; */
`;
const EventWrapper = styled.div`
    width: 100%;
    display: block;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
`;
const Event = styled.div`
    display: flex;
    height: 68px;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
`;
const ScoreBox = styled.div`
    display: flex;
    width: 100%;
`;
const FranLogo = styled.img`
    height: 40px;
    transform: scale(1);
    transition: transform 300ms ease-in-out;
    svg {
        height: 100%;
    }
`;
const Color = styled.div`
    height: 100%;
    flex: 1 1 1px;
    background: ${props => props.teamColor || 'palevioletred'};
`;
const Label = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 1px;
`;
const Team = styled.div`
    display: flex;
    align-items: center;
    color: white;
    flex: 1 1 1px;
    padding: 4px 8px;
    font-weight: 700;
    text-transform: uppercase;
    background: ${props => props.teamColor || 'palevioletred'};
    :first-child {
        justify-content: flex-end;
        ${Label} {
            align-items: flex-end;
            justify-content: center;
        }
    }
`;

const Score = styled.div`
    padding: 4px 8px;
`;
const Goals = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Goal = styled.div`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1em;
    padding: 0em 0.3em;
`;
const Shots = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
`;
const Shot = styled.div`
    display: block;
`;
const ShotsLabel = styled.div`
    font-size: 0.8rem;
`;
const PeriodAndTime = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    line-height: 1em;
`;
const Period = styled.div`
    display: block;
`;
const Time = styled.div`
    display: block;
`;
const LocName = styled.div`
    font-size: 14px;
    font-size: 1.1rem;
    line-height: 1em;
`;
const NickName = styled.div`
    font-size: 2rem;
    line-height: 1em;
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

const Match = props => (
    <Layout>
        <PageContent>
            <MatchWrapper>
                {/* <Meta>
                    <div>ID: {props.matchData.gamePK}</div>
                    <div>Timestamp: {props.matchData.metaData.timeStamp}</div>
                    <div>Status: {props.matchData.gameData.status.abstractGameState}</div>
                    <div>State: {props.matchData.gameData.status.detailedState}</div>
                </Meta> */}
                {/* <h1>The Match with the ID: {props.match.id}</h1> */}
                <ScoreBox>
                    <Team teamColor={getTeamColor(props.matchData.gameData.teams.away.id, 'first')}>
                        <FranLogo
                            src={`/logos/${getTeamLogo(props.matchData.gameData.teams.away.abbreviation)}`}
                            alt={`franlogo_${props.matchData.gameData.teams.away.abbreviation}`}
                        />
                        <Label>
                            <LocName>{props.matchData.gameData.teams.away.locationName}</LocName>
                            <NickName>{props.matchData.gameData.teams.away.teamName}</NickName>
                        </Label>
                    </Team>
                    <Score>
                        <Goals>
                            <Goal>{props.matchData.liveData.boxscore.teams.away.teamStats.teamSkaterStats.goals}</Goal>
                            <PeriodAndTime>
                                <Period>{props.matchData.liveData.linescore.currentPeriodOrdinal}</Period>
                                <Time>{props.matchData.liveData.linescore.currentPeriodTimeRemaining}</Time>
                            </PeriodAndTime>
                            <Goal>{props.matchData.liveData.boxscore.teams.home.teamStats.teamSkaterStats.goals}</Goal>
                        </Goals>
                        {/* <Shots>
                        <Shot>{props.matchData.liveData.boxscore.teams.away.teamStats.teamSkaterStats.shots}</Shot>
                        <ShotsLabel>SHOTS</ShotsLabel>
                        <Shot>{props.matchData.liveData.boxscore.teams.home.teamStats.teamSkaterStats.shots}</Shot>
                    </Shots> */}
                    </Score>
                    <Team teamColor={getTeamColor(props.matchData.gameData.teams.home.id, 'first')}>
                        <Label>
                            <LocName>{props.matchData.gameData.teams.home.locationName}</LocName>
                            <NickName>{props.matchData.gameData.teams.home.teamName}</NickName>
                        </Label>
                        <FranLogo
                            src={`/logos/${getTeamLogo(props.matchData.gameData.teams.home.abbreviation)}`}
                            alt={`franlogo_${props.matchData.gameData.teams.home.abbreviation}`}
                        />
                    </Team>
                </ScoreBox>
            </MatchWrapper>
            <EventWrapper>
                <Event>Something happend</Event>
                <Event>Something happend</Event>
                <Event>Something happend</Event>
                <Event>Something happend</Event>
                <Event>Something happend</Event>
            </EventWrapper>
        </PageContent>
    </Layout>
);

Match.getInitialProps = async function(context) {
    const {id} = context.query;
    // const res = await fetch('https://statsapi.web.nhl.com/api/v1/game/2019020906/feed/live');
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/game/${id}/feed/live`);
    const matchData = await res.json();

    // const data = SeasonSchedules;

    // console.log('theID::::' + typeof id);

    // const match = Object.values(data).find(entry => entry.id == `${id}`);
    // console.log('match', match);

    console.log('liveData:', matchData.gameData.teams.away.locationName);

    return {matchData};
};

export default Match;
