import Header from './Header';
import styled from 'styled-components';

const PageLayout = styled.div`
    /* font-family: 'Roboto Condensed', sans-serif; */
    font-family: 'Gotham A', 'Gotham B';
    @media screen and (max-width: 1960px) {
        width: 1600px;
        padding: 0px 68px;
    }
    width: 1280px;
    padding: 0px 64px;
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
