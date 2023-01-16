import './Result.scss'
import Button from "../Button/Button";
import AttemptCard from "../AttemptCard/AttemptCard";

const ResultGreat = () => {
    return (
        <div className="result-container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="percent">
                    <div className="percent-norm d-flex align-items-center justify-content-center">
                        <div className="percent-text">
                            100%
                        </div>
                    </div>
                </div>
                <div className="grade-text d-flex flex-column justify-content-between">
                    <div className="grade-title">
                        Отлично!
                    </div>
                    <div className="grade-description">
                        <div className="grade-description-mark">
                            Вопросы, на которые вы ответили неверно, помечены. Уделите им особое внимание.

                        </div>
                        <div className="grade-description-norm">
                            Можешь двигаться дальше. Но повтори тему Name.
                        </div>
                    </div>
                    <div className="buttons-area d-flex justify-content-between align-items-center">

                        <div className="result-button">
                            <Button title="Нет, давай еще раз"/>
                        </div>
                        <div className="result-button">
                            <Button title="Едем дальше"/>
                        </div>
                        <div className="result-tries">
                            Осталась
                            <span className="tries-count">1</span>
                            попытка
                        </div>

                    </div>
                </div>
            </div>
            <div className="past-attempts">
                <div className="past-attempts-text">
                    Результаты предыдущих попыток:
                </div>

                <AttemptCard status="good"/>
                <AttemptCard status="best"/>
                <AttemptCard status="worst"/>
            </div>
        </div>
    )
}

export default ResultGreat