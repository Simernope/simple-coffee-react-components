import './CourseWithProgress.scss';

const CourseWithProgress = () => {
    return (
        <div class="course-with-like d-flex  align-items-center ">
            <div class="course flex-fill d-flex justify-content-between align-items-center ">
                <div class="logo-and-prof d-flex  align-items-center">
                    <div class="logo">
                        <img src="../images/current-course/course-logo.svg" alt="course-logo"/>
                    </div>
                    <div class="prof">
                        Бариста
                    </div>
                </div>
                <div class="d-flex  align-items-center">
                    <div class="course-status failed-course">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="result-image d-flex justify-content-center align-items-center">
                                <img src='../images/result-icons/failed.svg' alt="done"/>
                            </div>
                            <div class="text-status d-none d-md-block">
                                Не сдан
                            </div>
                        </div>
                    </div>
                    <div class="continue-icon d-flex align-items-center">
                        <img src="../images/current-course/continue-arrow.svg" alt="continue-icon"/>
                    </div>
                </div>
            </div>
            <div class="d-none d-sm-block">
                <div class="like-button d-flex justify-content-center  align-items-center">
                    <img src="../images/like-svg-image/like-red.svg" alt="like-button"/>
                </div>
            </div>
        </div>

    )
}

export default CourseWithProgress