import Link from 'next/link';
import styled from 'styled-components';
import Clock from '../components/Clock';

const ATag = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 60px;
    color: #4a4a4a;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: #1a1a1a;
    }
`;
const HeaderContainer = styled.header`
    display: flex;
    padding: 0px;
`;
const Navigation = styled.div`
    display: block;
    flex: 1 1 1px;
`;
const TimeContainer = styled.div`
    display: block;
`;

const Header = () => (
    <HeaderContainer>
        <Navigation>
            <Link href="/" passHref>
                <ATag>Home</ATag>
            </Link>
            <Link href="/schedules" passHref>
                <ATag>Schedules</ATag>
            </Link>
            <Link href="/perdates" passHref>
                <ATag>PerDates</ATag>
            </Link>
        </Navigation>
        <TimeContainer>
            <Clock />
        </TimeContainer>
    </HeaderContainer>
);
export default Header;
