import Feedbackitem from './Feedbackitem';
import PropTypes from 'prop-types';

function Feedbacklist({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <Feedbackitem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

Feedbacklist.propTypes = {
    feedback: PropTypes.array.isRequired,
};

export default Feedbacklist;
