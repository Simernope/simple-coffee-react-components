import './Question.scss'

const Question = () => {
    return(
        <div className="question">
            <div className="question-header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        Что бы такое спросить про кофе?
                    </div>
                    <div className="points">
                        4 балла
                    </div>
                </div>


            </div>
            <div className="question-area">
                question-area
            </div>

        </div>
    )
}

export default Question