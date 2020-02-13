import Header from './Header';
import styled from 'styled-components';

const PageLayout = styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    width: 1596px;
    width: calc(100vw - 80px);
    padding: 40px;
`;

const Layout = props => (
    <PageLayout>
        <Header />
        {props.children}
        <style jsx global>{`
            body,
            html {
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
            }
        `}</style>
    </PageLayout>
);

export default Layout;
