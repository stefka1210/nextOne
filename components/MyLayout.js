import Header from './Header';
import styled from 'styled-components';

const PageLayout = styled.div`
    background: #f2f2f2;
    font-family: 'Roboto Condensed', sans-serif;
    width: 640px;
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
                background: #f2f2f2;
            }
        `}</style>
    </PageLayout>
);

export default Layout;
