import React from 'react';
import image from './images/image.png'
import './AllDrinks.scss'

const AllDrinks = () => {
    return (
        <div className='drinks'>
            <div className='row justify-content-center'>
                <div className='col-md--custom-gutter col-sm-12 col-12 col-md-7 col-lg-7'>
                    <div className='col-12 mt-5'>
                        <p className='h3'><strong>Кофе и напитки</strong></p>
                        <div className='card-container mt--custom-gutter'>
                            <div className= 'card-container-header'>
                                Новинки
                            </div>
                            <div className='card-container-body'>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                            </div>

                        </div>
                        <div className='card-container mt--custom-gutter'>
                            <div className= 'card-container-header'>
                                Сезонное меню
                            </div>
                            <div className='card-container-body'>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                            </div>

                        </div>
                        <div className='card-container mt--custom-gutter'>
                            <div className= 'card-container-header'>
                                Основное меню
                            </div>
                            <div className='card-container-body'>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                                <div className = 'card-main'>
                                    <div className='card-image'>
                                        <img src={image}/>
                                    </div>
                                    <p>Сок и смузи</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDrinks;
