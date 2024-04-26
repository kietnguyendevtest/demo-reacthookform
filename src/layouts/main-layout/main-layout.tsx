
import { Footer, Header } from '~/layouts/components';

interface IProps {
    children?: React.ReactNode
}

function MainLayout(props: IProps) {

    return (
        <>
            <Header />
            <div className="wrapper">

                <div className="content-wrapper">
                    {props.children}
                </div>

            </div>
            <Footer />
        </>
    );
}

export default MainLayout;