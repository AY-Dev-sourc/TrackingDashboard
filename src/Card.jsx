import dots from "./assets/images/icon-ellipsis.svg"

export default function Card({info,timeframe}){
    const current = info.timeframes[timeframe].current;
    const previous = info.timeframes[timeframe].previous;

    const label = timeframe === "daily" ? "Day" : timeframe === "weekly" ? "Week" : "Month";

    const cardClass = `card ${info.title.toLowerCase().replace( ' ' , '-' )}`;
    return(
        <>
            <div className={cardClass}>
                <div className="options">
                    <p>{info.title}</p>
                    <button type="button">
                        <img src={dots} alt="..." />
                    </button>
                </div>
                <div className="time">
                    <p>{current}hrs</p>
                    <p>Last {label} - {previous}hrs</p>
                </div>
            </div>
        </>
    )
}