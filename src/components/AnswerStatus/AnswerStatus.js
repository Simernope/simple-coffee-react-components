import './AnswerStatus.scss'

const AnswerStatus = ({status= true}) => {
    return (
        <>
            {
                status?
                    <div className="answer-status-container">
                        <div className="answer-true">
                            <div className="answer-data">
                                <div className="answer-status-true">
                                    Верно!
                                </div>
                                <div className="answer-description">
                                    А тут вот текст с объяснением, почему ответ верный. Текст короткий, но интересный
                                </div>
                            </div>

                        </div>

                    </div>
                    :
                    <div className="answer-status-container">
                        <div className="answer-false">
                            <div className="answer-data">
                                <div className="answer-status-false">
                                    Верно!
                                </div>
                                <div className="answer-description">
                                    А тут вот текст с объяснением, почему ответ верный. Текст короткий, но интересный
                                </div>
                            </div>

                        </div>

                    </div>
            }
        </>

    )
}

export default AnswerStatus