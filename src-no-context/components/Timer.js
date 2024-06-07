import { useEffect } from "react";

function secondsToTime(e) {
    const h = Math.floor(e / 3600)
            .toString()
            .padStart(2, "0"),
        m = Math.floor((e % 3600) / 60)
            .toString()
            .padStart(2, "0"),
        s = Math.floor(e % 60)
            .toString()
            .padStart(2, "0");

    return h > 0 ? h + ":" + m + ":" + s : m + ":" + s;
}

function Timer({ dispatch, secondsRemaining }) {
    useEffect(
        function () {
            const id = setInterval(function () {
                dispatch({ type: "tick" });
            }, 1000);

            return () => clearInterval(id);
        },
        [dispatch]
    );

    return <div className="timer">{secondsToTime(secondsRemaining)}</div>;
}

export default Timer;
