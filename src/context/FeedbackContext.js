import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setisLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEditObject, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        fetchFeedback();
    }, []);

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(
            'http://localhost:5000/feedback?_sort=id&_order=desc'
        );
        const data = await response.json();

        setFeedback(data);
        setisLoading(false);
    };

    // Delete feedback
    const deleteFeedback = (id, rating) => {
        if (
            window.confirm(
                `Are you sure you want to delete item number ${id} with a rating of ${rating}?`
            )
        )
            setFeedback(feedback.filter((item) => item.id !== id));
    };

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );
    };

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEditObject,
                isLoading,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
