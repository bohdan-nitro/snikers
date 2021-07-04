import React from "react";

const Drawer = () => {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex align-center justify-between ">
                    Корзина
                    <img className="removeBtn cu-p" src="/images/btn-remove.svg" alt="Remove"/>
                </h2>
                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/images/sneakers/1.jpg)'}}
                             className="cartItemImg"></div>
                        <div className={"mr-20"}>
                            <p className={"mb-5"}>Мужские кросовки Nike Mike XL Pro Air 2.0</p>
                            <b>10 000грн</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/images/sneakers/1.jpg)'}}
                             className="cartItemImg"></div>
                        <div className={"mr-20"}>
                            <p className={"mb-5"}>Мужские кросовки Nike Mike XL Pro Air 2.0</p>
                            <b>10 000грн</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: 'url(/images/sneakers/1.jpg)'}}
                             className="cartItemImg"></div>
                        <div className={"mr-20"}>
                            <p className={"mb-5"}>Мужские кросовки Nike Mike XL Pro Air 2.0</p>
                            <b>10 000грн</b>
                        </div>
                        <img className="removeBtn" src="/images/btn-remove.svg" alt="Remove"/>
                    </div>

                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>20 00грн</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1250грн</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img className="arrow" src="/images/arrow.svg"
                                                                        alt=""/></button>
                </div>
            </div>
        </div>
    )
}
export default Drawer;