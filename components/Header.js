import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/schedules">
            <a style={linkStyle}>Schedules</a>
        </Link>
        {/* <Link href="/today">
            <a style={linkStyle}>Today</a>
        </Link> */}
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
