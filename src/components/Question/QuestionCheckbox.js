import './Question.scss'

const QuestionCheckbox = () => {
    return (
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
            <div className="answer-area">
                <div className="answers">
                    <div className="answer  ">

                        <input className="form-check-input  checkbox" type="checkbox" name="inlineRadioOptions"
                               id="inlineRadio1"
                               value="option1"/>

                        <label className="form-check-label answer-title" htmlFor="inlineRadio1">Можно это</label>
                    </div>
                    <div className="answer  ">
                        <input className="form-check-input checkbox" type="checkbox" id="inlineCheckbox1"
                               value="option1"/>

                        <label className="form-check-label answer-title" htmlFor="inlineRadio1">Можно это</label>
                    </div>
                    <div className="answer  ">

                        <input className="form-check-input checkbox" type="checkbox" id="inlineCheckbox1"
                               value="option1"/>


                        <label className="form-check-label answer-title" htmlFor="inlineRadio1">Можно это</label>
                    </div>
                    <div className="answer  ">

                        <input className="form-check-input checkbox" type="checkbox" id="inlineCheckbox1"
                               value="option1"/>


                        <label className="form-check-label answer-title" htmlFor="inlineRadio1">Можно это</label>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default QuestionCheckbox