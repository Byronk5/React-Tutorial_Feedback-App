import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingsSelect from './RatingsSelect';

function Feedbackform() {
    const { addFeedback, feedbackEditObject, updateFeedback } =
        useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    // useEffect will run based on the second arguement either empty(when the page loads) or based on what is passed in - in this case feedbackEditObject
    useEffect(() => {
        if (feedbackEditObject.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEditObject.item.text);
            setRating(feedbackEditObject.item.rating);
        }
    }, [feedbackEditObject]);

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Your message must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };

            if (feedbackEditObject.edit === true) {
                updateFeedback(feedbackEditObject.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingsSelect select={(rating) => setRating(rating)} />
                <div className='input-group'>
                    <input
                        onChange={handleTextChange}
                        type='text'
                        placeholder='Write a review'
                        value={text}
                    />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
}

export default Feedbackform;
