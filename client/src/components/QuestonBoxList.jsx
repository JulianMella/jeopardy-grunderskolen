import './QuestionBoxList.css'
import { QuestionBox } from './QuestionBox';
import { useState } from 'react';

export function QuestionBoxList({selectedBoxes, setSelectedBoxes, showQuestion, setShowQuestion}) {
    const resetGame = () => {
        setSelectedBoxes([])
    }

    return showQuestion ? (
        <div className="question-div" onClick={() => setShowQuestion(false)}>
            <p>{Array.from(questionMap)[
                selectedBoxes[selectedBoxes.length - 1].col
                ][1]
                [
                selectedBoxes[selectedBoxes.length - 1].row
                ].question}</p>
        </div>
    )

    : (
        <div className="game-container">
            {Array.from(questionMap.entries()).map(([topic, questions], columnIndex) => {
                return (
                <div key={topic} className="topic-row">
                    {/* Render topic title */}
                    <div className="topic-box" onClick={resetGame}>{topic}</div>
                    {questions.map((question, rowIndex) => (
                            <QuestionBox
                                key={question.value}
                                questionText={question.value}
                                colIndex = {columnIndex}
                                rowIndex = {rowIndex}
                                currentList = {selectedBoxes}
                                updateList = {setSelectedBoxes}
                                showQuestion = {setShowQuestion}
                            />
                        ))}
                    {/* Render each question under the topic */}

                </div>
            )})}

        </div>
      );
}

const questionMap = new Map([
    [
        'TEST 1 OVERFLOW HAHAHAX', [
            { value: '$ 200', question: 'Hva heter ulrik?' },
            { value: '$ 400', question: 'hva heter ramin?' },
            { value: '$ 600', question: 'hvor ligger chile?'},
            { value: '$ 800', question: 'hvor ligger chile?'},
            { value: '$ 1000', question: 'hvor ligger chile?'},
        ]
    ],
    [
        'TEST 2', [
            { value: '$ 200', question: 'hvor ligger oslo?' },
            { value: '$ 400', question: 'hvor ligger chile?' },
            { value: '$ 600', question: 'hvor ligger chile?'},
            { value: '$ 800', question: 'hvor ligger chile?'},
            { value: '$ 1000', question: 'hvor ligger chile?'},
        ]
    ],
    [
        'TEST 3', [
            { value: '$ 200', question: 'hvor ligger oslo?' },
            { value: '$ 400', question: 'hvor ligger chile?' },
            { value: '$ 600', question: 'hvor ligger chile?'},
            { value: '$ 800', question: 'hvor ligger chile?'},
            { value: '$ 1000', question: 'hvor ligger chile?'},
        ]
    ],
    [
        'TEST 4', [
            { value: '$ 200', question: 'hvor ligger oslo?' },
            { value: '$ 400', question: 'hvor ligger chile?' },
            { value: '$ 600', question: 'hvor ligger chile?'},
            { value: '$ 800', question: 'hvor ligger chile?'},
            { value: '$ 1000', question: 'hvor ligger chile?'},
        ]
    ],
    [
        'TEST 5', [
            { value: '$ 200', question: 'hvor ligger oslo?' },
            { value: '$ 400', question: 'hvor ligger chile?' },
            { value: '$ 600', question: 'hvor ligger chile?'},
            { value: '$ 800', question: 'hvor ligger chile?'},
            { value: '$ 1000', question: 'hvor ligger chile?'},
        ]
    ]
]);
