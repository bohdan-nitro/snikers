import React from "react";

const Card = () => {
    return(
        <div className="card">
            <img width={133} height={112} src="/images/sneakers/4.jpg" alt="Sneakers"/>
            <h5>Мужские кроссовки для тренировки ног Nike Nitro Busters XL</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>12 000грн.</b>
                </div>
                <button className="button">
                    <img width={15} height={15} src="/images/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}
export default Card;