import { PropsWithChildren } from 'react';
import bg from '../../assets/bg.jpg';
import './PageHeader.scss';

function PageHeader({ children }: PropsWithChildren) {
    return (
        <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
            <h2>{children}</h2>
        </div>
    );
}

export default PageHeader;
