import './PopupWindow.scss'
import Button from "../Buttons/Button";
import ButtonWithoutBorder from "../Buttons/ButtonWithoutBorder/ButtonWithoutBorder";

const PopupWindow = () => {
    return (
        <div className="popup-container">
            <div className="popup-title">
                Название теста
            </div>
            <div className="popup-time-limit">
                Внимание! Тест имеет ограничение по времени:
                <span className="time">
                     20 мин
                </span>
                .
            </div>
            <div className="popup-description">
                Тут текст какой-нибудь про условия прохождения. С другой стороны постоянный количественный рост и сфера
                нашей активности требуют от нас анализа новых предложений.
            </div>
            <div className="buttons-area">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="popup-button">
                        <ButtonWithoutBorder title="Отмена"/>
                    </div>
                    <div className="popup-button">
                        <Button title="Начать выполнение"/>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PopupWindow