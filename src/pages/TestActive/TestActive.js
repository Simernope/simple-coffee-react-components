import './TestActive.scss'
import Question from "../../components/Question/Question";
import DropList from "../../components/DropList/DropList";

const TestActive = () => {
    return (
        <div className="test">
            <div className="row ">
                <div className="col">
                    <div className="drop-list">
                        <DropList/>
                    </div>
                </div>
                <div className="col-7">
                    <div className="test-title d-flex align-items-center justify-content-between">
                        <div className="title">
                            Название теста
                        </div>
                        <div className="progress-line">
                            progress-line
                        </div>
                    </div>

                    <div className="question-list">
                        <Question/>
                    </div>
                </div>
                <div className="col d-none d-md-block">

                </div>
            </div>

        </div>
    )
}

export default TestActive