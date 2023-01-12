import './ProgressStatus.scss'
import resultIcon from './images/result-icons/done.svg'
import continueArrow from './images/continue-arrow.svg'

const ProgressStatusDone = () => {
    return (
        <div className="d-flex  align-items-center">
            <div className="course-status ">
                <div className="done-course">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="result-image d-flex justify-content-center align-items-center">
                            <img src={resultIcon} alt="done"/>
                        </div>
                        <div className="text-status d-none d-md-block">
                            Завершен, 87%
                        </div>
                    </div>
                </div>

            </div>
            <div class="continue-icon d-flex align-items-center">
                <img src={continueArrow} alt="continue-icon"/>
            </div>
        </div>
    )
}

export default ProgressStatusDone