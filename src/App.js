import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/Feedbackdata';
import Feedbacklist from './components/Feedbacklist';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id, rating) => {
        if (
            window.confirm(
                `Are you sure you want to delete item number ${id} with a rating of ${rating}?`
            )
        )
            setFeedback(feedback.filter((item) => item.id !== id));
    };

    return (
        <>
            <Header />
            <div className='container'>
                <Feedbackform />
                <Feedbackstats feedback={feedback} />
                <Feedbacklist
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;
