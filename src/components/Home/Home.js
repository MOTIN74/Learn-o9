import React from 'react';
import Benefits from '../Benifits/Benifits';
import Gallery from '../Gallery/Gallery';
import SubHome from '../SubHome/SubHome';
import TeamDetails from '../TeamDetails/TeamDetails';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h2>How we care about new leaners</h2>
            <div className="d-flex">
                
                <div>
                    <h4>Basic theory Knowledge
                    </h4>
                    <p>First we teach about the theory about the topic of learning language.And we justify their capacity.Then we approach forward according their capability.

                    </p>
                </div>
                <div>
                    <h4>Exam and test
                    </h4>
                    <p>In the last stage we judge everyone by having a test and competetion.for winner,have some attractive prize and certificates.

                    </p>
                </div>
                <div>
                    <h4>Practical Spoken Class
                    </h4>
                    <p>After finishing first stage, learners are ready to handle practical knowledge.we provide all the practical based on theory at first stage.

                    </p>
                </div>
                <div>
                    <h4>Professional training
                    </h4>
                    <p>In this stage,all the learners gain much experience about theory and practical knowledge.So now this is the time to go deep on spoken your langguage

                    </p>
                </div>
            </div>
            <SubHome></SubHome>
            <Gallery></Gallery>
            <TeamDetails></TeamDetails>
            <Benefits></Benefits>
            

            
           
        </div>
    );
};

export default Home;