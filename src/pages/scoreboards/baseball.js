import React from "react";
import "./scorecss/baseball.css";

/*TODO: add graphics for baserunners*/
const Baseball = ({
    H_score,
    V_score,
    Period,
    Down,
    Balls,
    Strikes,
    Possetion,
    hcolor,
    vcolor,
}) => {
    const home_color = {
        backgroundColor: hcolor,
    };

    const vis_color = {
        backgroundColor: vcolor,
    };

    return (
        <>
            <div className="baseball_Container">
                <div className="baseball_items">
                    <div className="teams">
                        <h1 className="team" style={home_color}>
                            home
                        </h1>
                        <h1 className="team" style={vis_color}>
                            Visitor
                        </h1>
                    </div>
                    <div className="scores">
                        <h1 className="score"> {H_score} </h1>
                        <h1 className="score"> {V_score} </h1>
                    </div>
                    <div className="misc_info">
                        <h1>
                            {Possetion}{Period}
                        </h1>
                        <h1>{Down} Outs</h1>
                        <h1>
                            B {Balls} - {Strikes} S
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Baseball;
