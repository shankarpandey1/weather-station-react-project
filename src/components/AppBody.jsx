import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import temperatureConversion from "../common/temperatureConversion";

const AppBody = () => {
    const [state, setState] = useContext(AppContext);


    if (!state?.selctedCityInfo?.base) {
        return <h1
            className="text-explain"
        > please write the city name
        </h1>
    }

    if (state?.selctedCityInfo?.message) {
        return <h1
            className="text-explain"
        >
            {
                state?.selctedCityInfo?.message
            }
        </h1>
    }





    const temperature = temperatureConversion(
        state?.selctedCityInfo,
        state.unitTemp
    );

    return (
        <div className="search-box">
            <div className="location-box">
                <div className="location">
                    {
                        state?.selctedCityInfo?.name
                        && `${state?.selctedCityInfo?.name || ''}, ${state?.selctedCityInfo?.sys?.country}`
                    }
                </div>
                <div className="date">
                    {/* {dateBuilder(new Date())} */}
                </div>
            </div>
            {
                temperature?.temp
                && <>
                    <div className="weather-box">
                        <div className="temp">
                            <h1 className="main-Temp">{temperature?.temp || ""}</h1>
                            <small>
                                Feels: {temperature?.feels_like}
                                <br />
                            </small>
                            <br />
                            <p className="wind">
                                <span>
                                    <i className="fa-solid fa-wind"></i>
                                </span>{" "}
                                {state?.selctedCityInfo?.wind?.speed}m/s
                            </p>
                            <br />
                            <small>Humidity {state?.selctedCityInfo?.main?.humidity}%</small>
                        </div>

                        <div className="weather">
                            {/* state?.selctedCityInfo?.weather[0]?.description */}
                        </div>
                    </div>
                    <div className="convert-button-container">
                        <button
                            className={`
                    convert-button +
                    ${state?.selctedCityInfo?.main?.temp > Number(12 + 273.15)
                                    ? "button-warm"
                                    : "button-cold"
                                }
                `}
                            onClick={async () => {
                                setState((draft) => {
                                    if (state?.unitTemp == "C") {
                                        draft.unitTemp = "F";
                                        return;
                                    }
                                    draft.unitTemp = "C";
                                });
                            }}
                        >
                            Convert in {state?.unitTemp == "C" ? "Fahrenheit" : "Celsius"}
                        </button>
                    </div>
                </>

            }


        </div>
    );
};
export default AppBody;
