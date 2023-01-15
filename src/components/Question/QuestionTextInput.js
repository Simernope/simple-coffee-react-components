import './Question.scss'

const QuestionTextInput = () => {
    return (
        <div className="question">
            <div className="question-header">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        Заполните пропуски
                    </div>
                    <div className="points">
                        4 балла
                    </div>
                </div>


            </div>
            <div className="answer-area">
                <div className="answers">
                    <div className="answer  ">
                        <div className="question-text">
                            Таким образом дальнейшее развитие различных форм деятельности требуют от нас анализа форм
                            развития. Разнообразный и богатый опыт постоянное
                            <input type="text" className="answer-text-input" alt="answer-text-input"
                                   placeholder="введите ваш ответ"/>обеспечение нашей деятельности представляет собой
                            интересный эксперимент проверки новых предложений. Разнообразный и богатый опыт сложившаяся
                            структура организации позволяет выполнять важные задания по разработке новых предложений.
                            Разнообразный и богатый опыт рамки и место обучения кадров играет

                            <span className="answer-important-info ">
                                    важную
                                </span>

                            роль в формировании систем массового участия. Значимость этих проблем настолько очевидна,
                            что сложившаяся структура организации позволяет оценить значение новых предложений.
                        </div>

                    </div>
                    <div>
                        <input type="email" className=" answer-input"
                               placeholder="Впишите ответ"/>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default QuestionTextInput