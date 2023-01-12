import './Timer.scss'
import Button from "../Button/Button";

const Timer = () => {
    return (
        <div className="timer">

            <div className="title ">
                Тест
                <div className="d-inline-flex">
                    <div className="test-title-name  ">
                        TestName
                    </div>
                </div>
                запущен

            </div>
            <div className="till-end">
                До завершения:
                <div className="time d-inline-flex">
                    15:45
                </div>
            </div>
            <div className="justify-content-center  align-items-center">
                <Button/>
            </div>
        </div>

    )
}

export default Timer