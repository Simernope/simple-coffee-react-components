import './AttemptCard.scss'

const AttemptCard = ({status = "good"}) => {
    return (
        <>
            {
                status === "good" &&
                <div className="attempt-container">
                    <div className="attempt-background-good">
                        <div className="attempt-data">
                            <div className="d-flex align-items-center justify-content-between">

                                <div className="attempt-number-percent">
                                    <div className="attempt-good">
                                        42%
                                    </div>
                                </div>
                                <div className="attempt-number">
                                    13.09.2021
                                </div>
                                <div className="attempt-number-percent">
                                    <div className="attempt-good">
                                        6/15
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            }
            {
                status === "best" &&
                <div className="attempt-container">
                    <div className="attempt-background-best">
                        <div className="attempt-data">
                            <div className="d-flex align-items-center justify-content-between">

                                <div className="attempt-number-percent">
                                    <div className="attempt-best">
                                        42%
                                    </div>
                                </div>
                                <div className="attempt-number">
                                    13.09.2021
                                </div>
                                <div className="attempt-number-percent">
                                    <div className="attempt-best">
                                        6/15
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            }
            {
                status === "worst" &&
                <div className="attempt-container">
                    <div className="attempt-background-worst">
                        <div className="attempt-data">
                            <div className="d-flex align-items-center justify-content-between">

                                <div className="attempt-number-percent">
                                    <div className="attempt-worst">
                                        42%
                                    </div>
                                </div>
                                <div className="attempt-number">
                                    13.09.2021
                                </div>
                                <div className="attempt-number-percent">
                                    <div className="attempt-worst">
                                        6/15
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            }
        </>


    )
}

export default AttemptCard