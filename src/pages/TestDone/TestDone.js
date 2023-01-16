import './TestDone.scss'
import QuestionRadio from "../../components/Question/QuestionRadio";
import DropList from "../../components/DropList/DropList";
import QuestionCheckbox from "../../components/Question/QuestionCheckbox";
import QuestionTextInput from "../../components/Question/QuestionTextInput";
import ResultGreat from "../../components/TestResult/ResultGreat";

const TestDone = () => {
    return (
        <div className="test">
            <div className="row ">
                <div className="col">
                    <div className="col d-none d-md-block">
                        <DropList/>
                    </div>
                </div>
                <div className="col-md-7 col-12">
                    <div className="test-title d-flex align-items-center justify-content-between">
                        <div className="title">
                            Название теста
                        </div>
                        <div className="progress-line">
                            progress-line
                        </div>
                    </div>

                    <div className="question-list">
                        <ResultGreat/>
                        <QuestionRadio/>
                        <QuestionCheckbox/>
                        <QuestionTextInput/>
                    </div>
                </div>
                <div className="col d-none d-md-block">

                </div>
            </div>

        </div>
    )
}

export default TestDone