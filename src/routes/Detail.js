import { useState } from "react";

function Detail(props) {

    let [coffee] = useState();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={ img[(props.i)]} width="80%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.coffee[0].title}</h4>
                    <p>props.coffee[0].content</p>
                    <p>props.coffee[0].price</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;