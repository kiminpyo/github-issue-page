import "./App.css";
import { getData } from "./apis/octokit";
import { BrowserRouter, Routes, Route, useFetcher } from "react-router-dom";
import { createContext, useEffect, useReducer, useState } from "react";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import reducer, {
    FAILURE,
    INITDATA,
    initialState,
    SUCCESS,
} from "./reducer/issues";
import AppLayout from "./components/Layout/AppLayout";
export const DispatchContext = createContext();
export const StateContext = createContext();
function App() {
    const [issueData, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({ type: INITDATA });
        try {
            const request = await getData(0);
            dispatch({ type: SUCCESS, payload: request });
        } catch (err) {
            dispatch({ type: FAILURE, error: err });
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <StateContext.Provider value={issueData}>
                <DispatchContext.Provider value={dispatch}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<AppLayout />}>
                                <Route index element={<LandingPage />} />
                                <Route
                                    path="/detail"
                                    element={<DetailPage />}
                                />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </DispatchContext.Provider>
            </StateContext.Provider>
        </>
    );
}

export default App;
