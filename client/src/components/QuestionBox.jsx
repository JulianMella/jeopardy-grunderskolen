import "./QuestionBoxList.css"

// Must have access to its question and its dollar value
export function QuestionBox ({questionText, colIndex, rowIndex, currentList, updateList, showQuestion}) {
    const alreadyExists = currentList.some(item => item.col === colIndex && item.row === rowIndex);
    const handleClick = () => {
        updateList([...currentList, {col: colIndex, row: rowIndex}])
        showQuestion(true)
    }
    return alreadyExists ? (
        <>
            <div className='question-box-clicked'>-</div>
        </>
    ) : (
        <>
            <div className='question-box' onClick={handleClick}>{questionText}</div>
        </>
    );
}