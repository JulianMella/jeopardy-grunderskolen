import { QuestionBoxList } from './components/QuestonBoxList'
import { TeamBox } from './components/TeamBox'
import { useState, useEffect } from 'react'
import './GameShow.css'

export function GameShow() {
    const [team1Names, setTeam1Names] = useState([])
    const [team1Counter, setTeam1Counter] = useState(0)
    const [team2Names, setTeam2Names] = useState([])
    const [team2Counter, setTeam2Counter] = useState(0)
    const [team3Names, setTeam3Names] = useState([])
    const [team3Counter, setTeam3Counter] = useState(0)
    const [team4Names, setTeam4Names] = useState([])
    const [team4Counter, setTeam4Counter] = useState(0)
    const [selectedBoxes, setSelectedBoxes] = useState([])
    const [questionIsShowing, setQuestionIsShowing] = useState(false)

    const [showImage, setShowImage] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);


    useEffect(() => {
        const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // Start fading after 2 seconds
        const hideTimer = setTimeout(() => setShowImage(false), 2500); // Fully hide after fade completes

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    return showImage ? (
        <div className="wrapper-bg">
            <div className={`image-container ${fadeOut ? 'fade-out' : ''}`}>
                <img src="../public/GSJP.png" alt="Loading" />
            </div>
        </div>
    ) : !questionIsShowing ? (
    <div className="flex-div-gameshow">
        <div className="flex-div-teambox">
            <TeamBox counter={team1Counter} setCounter={setTeam1Counter}/>
            <TeamBox counter={team2Counter} setCounter={setTeam2Counter}/>
        </div>
        <div className="flex-div-question-list">
        <QuestionBoxList selectedBoxes={selectedBoxes} setSelectedBoxes={setSelectedBoxes} showQuestion={questionIsShowing} setShowQuestion={setQuestionIsShowing}/>
        </div>
        <div className="flex-div-teambox">
            <TeamBox counter={team3Counter} setCounter={setTeam3Counter}/>
            <TeamBox counter={team4Counter} setCounter={setTeam4Counter}/>
        </div>
    </div>
    ) : (
        <QuestionBoxList selectedBoxes={selectedBoxes} setSelectedBoxes={setSelectedBoxes} showQuestion={questionIsShowing} setShowQuestion={setQuestionIsShowing}/>
    )
}

//