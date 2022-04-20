import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feedbacklist from './components/Feedbacklist';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <>
                                    <Feedbackform />
                                    <Feedbackstats />
                                    <Feedbacklist />
                                </>
                            }
                        ></Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
