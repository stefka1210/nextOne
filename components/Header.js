import Link from 'next/link';
import styled from 'styled-components';

const ATag = styled.a`
    margin-right: 60px;
    cursor: pointer;
`;
const HeaderContainer = styled.header`
    padding: 0px;
`;

const Header = () => (
    <HeaderContainer>
        <Link href="/">
            <ATag>Home</ATag>
        </Link>
        <Link href="/schedules">
            <ATag>Schedules</ATag>
        </Link>
        {/* <Link href="/today">
            <a style={linkStyle}>Today</a>
        </Link> */}
        <Link href="/about">
            <ATag>About</ATag>
        </Link>
    </HeaderContainer>
);

export default Header;
