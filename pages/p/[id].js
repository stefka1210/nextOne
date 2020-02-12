import Layout from '../../components/MyLayout';
import SeasonSchedules from '../../data/SeasonSchedule-20192020';

const Match = props => (
    <Layout>
        <h1>The Match with {props.match.id}</h1>
        <div>
            <div>{props.match.a}</div>
            <div>@</div>
            <div>{props.match.h}</div>
        </div>
    </Layout>
);

Match.getInitialProps = async function(context) {
    const {id} = context.query;
    const data = SeasonSchedules;

    console.log('theID::::' + typeof id);

    const match = Object.values(data).find(entry => entry.id == `${id}`);
    console.log('match', match);

    return {match};
};

export default Match;
