import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>This is a feedback app</p>
            </div>
            <p>Version: 1.0.0</p>
            <Link to='/'>
                <p className='underline'>Back to Home</p>
            </Link>
        </Card>
    );
}

export default AboutPage;
