import './DropList.scss'
import bottomArrow from './images/bottom-arrow.svg'
import topArrow from './images/top-arrow.svg'
import ellipse from './images/ellipse.svg'
import {useState} from "react";

const DropList = () => {
    const [isListOpen, setIsListOpen] = useState(false)
    return (
        <div className="dropList">
            <div className="topic d-flex  justify-content-between" onClick={() => setIsListOpen(!isListOpen)}>
                <div className="" >
                    Давайте знакомиться
                    {
                        isListOpen &&
                        <div className="sub-topic">
                            <div className="sub-topic-item">
                                Кофейня
                            </div>
                            <div className="sub-topic-item">
                                Посуда
                            </div>
                            <div className="sub-topic-item-current">
                                <div className="d-flex align-items-center ">
                                    <img src={ellipse} alt="ellipse" className="ellipse"/>
                                    <div className="test-item">
                                        Тест
                                    </div>
                                </div>
                            </div>


                        </div>
                    }

                </div>
                <div className="arrow">
                    {
                        isListOpen ?
                            <img src={topArrow} alt="topArrow"/>
                            :

                            <img src={bottomArrow} alt="bottomArrow"/>

                    }
                </div>
            </div>

        </div>
    )
}

export default DropList