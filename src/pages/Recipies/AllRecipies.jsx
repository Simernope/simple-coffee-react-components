import React from 'react';
import './AllRecipies.scss'
import heart from './images/heart.svg'
import breakfast from './images/breakfast.svg'
import cup from './images/cup.svg'
import pie from './images/pie.svg'
import rolls from './images/rolls.svg'
import salads from './images/salads.svg'

const AllRecipies = () => {
    return (
        <div className = 'recipies'>
            <div className='row justify-content-center'>
                        <div className='col-md--custom-gutter col-sm-12 col-12 col-md-7 col-lg-7'>
                            <div className='col-12 mt-5'>
                                <p className='h3'><strong>Рецепты</strong></p>
                                <div className='card-container mt--custom-gutter'>
                                    <div className='card-favorites'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={heart} className='img-fluid'/>
                                                <span>Избранное</span>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>
                                    <div className='card mb-3'>
                                        <div className='card-body'>
                                            <img src={cup} className='img-fluid'/>
                                            <span>Кофе и напитки</span>
                                        </div>
                                    </div>
                                    <div className='card mb-3'>
                                        <div className='card-body'>
                                            <img src={pie} className='img-fluid'/>
                                            <span>Десерты</span>
                                        </div>
                                    </div>
                                    <div className='card mb-3'>
                                        <div className='card-body'>
                                            <img src={breakfast} className='img-fluid'/>
                                            <span>Завтраки</span>
                                        </div>
                                    </div>
                                    <div className='card mb-3'>
                                        <div className='card-body'>
                                            <img src={rolls} className='img-fluid'/>
                                            <span>Роллы</span>
                                        </div>
                                    </div>
                                    <div className='card mb-3'>
                                        <div className='card-body'>
                                            <img src={salads} className='img-fluid'/>
                                            <span>Салаты</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            </div>

        </div>
    );
};

export default AllRecipies;
