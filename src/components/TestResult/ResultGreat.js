import './Result.scss'
import Button from "../Buttons/Button";
import AttemptCard from "../AttemptCard/AttemptCard";

const ResultGreat = () => {
    return (
        <div className="result-container">
            <div className="row d-flex justify-content-between align-items-center">

                <div className="grade-title d-block d-sm-none">
                    <div className="d-flex align-items-center justify-content-center">
                        Отлично!
                    </div>
                </div>
                <div className="col-12  col-xl-3 col-md-5 col-sm-4 percent">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="percent-norm d-flex align-items-center justify-content-center">
                            <div className="percent-text">
                                100%
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-9 col-md-7 col-sm-8 grade-text">
                    <div className="grade-title d-none d-sm-block">
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
                    <div className="buttons-area d-flex justify-content-between align-items-center flex-wrap">
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