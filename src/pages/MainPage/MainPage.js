import './MainPage.scss'
import Timer from "../../components/Timer/Timer";
import courseLogo from './images/current-course/course-logo.svg'
import card from './images/cards/card.svg'
import card1 from './images/cards/card-1.svg'
import card2 from './images/cards/card-2.svg'
import card3 from './images/cards/card-3.svg'
import leftArrow from './images/events/left-arrow.svg'
import rightArrow from './images/events/right-arrow.svg'
import continueArrow from './images/current-course/continue-arrow.svg'


const MainPage = () => {
    return (
        <div className="main-page">
            <div className="row">
                <div className="col">

                </div>
                <div className="col-12 col-md-7">
                    <div className="d-md-none">
                        <Timer/>
                    </div>

                    <div className="main-section">

                        <div className="user-data">
                            <div className="name">
                                Иван Петров
                            </div>
                            <div className="profession">
                                Бариста
                            </div>
                        </div>

                        <div className="cards row gy-4">
                            <div className="card col-md-3 col-sm-6 col-6">
                                <img src={card} alt="card-0"/>
                            </div>
                            <div className="card col-md-3 col-sm-6 col-6">
                                <img src={card1} alt="card-1"/>
                            </div>
                            <div className="card col-md-3 col-sm-6 col-6">
                                <img src={card2} alt="card-2"/>
                            </div>
                            <div className="card col-md-3 col-sm-6 col-6">
                                <img src={card3} alt="card-3"/>

                            </div>
                        </div>

                        <div className="current-course-section ">

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="current-course">
                                    Текущий курс
                                </div>
                                <div className="available-course-date">
                                    доступен до 01.05.21
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">

                                    <div className="course d-flex justify-content-between align-items-center ">
                                        <div className="logo-and-prof d-flex  align-items-center">
                                            <div className="logo">
                                                <img src={courseLogo}
                                                     alt="course-logo"/>
                                            </div>
                                            <div className="prof">
                                                Бариста
                                            </div>
                                        </div>
                                        <div className="progress-and-icon d-flex  align-items-center">
                                            <div className="progress-percent">
                                                12%
                                            </div>
                                            <div className="continue-icon d-flex  align-items-center">
                                                <img src={continueArrow}
                                                     alt="continue-icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="news-section row">
                            <div className="col">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="news">
                                        Новости
                                    </div>
                                    <div className="show-all-news">
                                        Показать все
                                    </div>
                                </div>
                                <div className="bg-image ">
                                    <div className="news-card">
                                        <div className="news-title ">
                                            Какая-то важная
                                            новость о кофе
                                        </div>
                                        <div className="news-description">
                                            Тут вот текст новости пишется, но не весь, а только...
                                        </div>
                                        <div className="news-date">
                                            15.04.21
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    <div className="events-section">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="events">
                                События
                            </div>
                            <div className="events-arrows d-flex justify-content-between align-items-center">
                                <div className="left-arrow-event">
                                    <img src={leftArrow} alt="left-arrow"/>
                                </div>
                                <div className="right-arrow-event">
                                    <img src={rightArrow} alt="right-arrow"/>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4">
                            <div className="col-xl-5 col-md-12">
                                <div className="card event d-flex justify-content-center">
                                    <div className="event-title">
                                        Обновление
                                        в статье “Завтрак”
                                    </div>
                                    <div className="event-description">
                                        Какое-то небольшое описание того, какие изменения были внесены
                                    </div>
                                    <div className="event-detail d-flex  align-items-center">
                                        <div className="event-detail-text">
                                            Подробнее
                                        </div>
                                        <div
                                            className="event-detail-arrow d-flex justify-content-center  align-items-center">
                                            <img src={continueArrow}
                                                 alt="event-detail-arrow"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl col-md-6 ">
                                <div className="card event event-1 d-flex justify-content-end">
                                    <div className="event-card-text ">
                                        Новая кофейня на Пушкина 32
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl col-md-6 ">
                                <div className="card event event-2  d-flex justify-content-end"
                                >
                                    <div className="event-card-text">
                                        Любимые роллы еще вкуснее
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div></div>
                <div className="col">
                    <div className="d-none d-md-block">
                        <Timer/>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MainPage