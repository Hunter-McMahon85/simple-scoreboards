import React from "react";
/*TODO: add graphics for baserunners*/

const BaseballController = ({
    U_score,
    Change_Period,
    pitch_res,
    DefDown,
    Change_Pos,
    hcolor,
    vcolor,
}) => {
    const home_color = {
        backgroundColor: hcolor,
    };
    const vis_color = {
        backgroundColor: vcolor,
    };

    Change_Pos("T")
    let inning_halfs = 0;
    function HandleInning() {
        inning_halfs++;
        if ((inning_halfs % 2) === 0) {
            Change_Period();
            Change_Pos("T")
        } else {
            Change_Pos("B")
        }
    }

    let num_outs = 0;
    DefDown("0");
    function HandleOuts() {
        num_outs++;
        switch (num_outs) {
            case 1:
                DefDown("1");
                break;
            case 2:
                DefDown("2");
                break;
            case 3:
                DefDown("0");
                num_outs = 0;
                HandleInning();
                break;
            default:
                num_outs = 0;
                break;
        }
    }

    let num_balls = 0;
    let num_strikes = 0;
    function HandleBall() {
        num_balls++;
        if (num_balls === 4) {
            num_balls = 0;
            num_strikes = 0;
        }
        pitch_res("b", num_balls);
        pitch_res("s", num_strikes);
    }

    function HandleStrike() {
        num_strikes++;
        if (num_strikes === 3) {
            num_balls = 0;
            num_strikes = 0;
            HandleOuts();
        }
        pitch_res("b", num_balls);
        pitch_res("s", num_strikes);
    }

    function ResetPCount() {
        num_balls = 0;
        num_strikes = 0;
        pitch_res("b", num_balls);
        pitch_res("s", num_strikes);
    }



    return (
        <div className="scorekeeper">
            <div className="teams">
                <div className="Home" style={home_color}>
                    <button onClick={() => U_score("h", 1)}>+1 Run</button>
                    <button onClick={() => U_score("h", -1)}>Undo Last Home Score</button>
                </div>
                <div className="Away" style={vis_color}>
                    <button onClick={() => U_score("v", 1)}>+1 Run</button>
                    <button onClick={() => U_score("v", -1)}>
                        Undo Last Visitor Score
                    </button>
                </div>
            </div>
            <div className="misctrl">
                <button onClick={() => HandleBall()}>Ball</button>
                <button onClick={() => HandleStrike()}>Strike</button>
                <button onClick={() => ResetPCount()}>Reset Count</button>
                <button onClick={() => HandleOuts()}>Out</button>
            </div>
            <div className="timectrl">
                <button onClick={() => HandleInning()}>Change 1/2 Inning</button>
            </div>
        </div>
    );
};

export default BaseballController;
