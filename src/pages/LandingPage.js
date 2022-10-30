import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DispatchContext, StateContext } from "../App";
import Error from "../components/Error";
import IssueList from "../components/IssueList";

const LandingPage = () => {
    const state = useContext(StateContext);
    const { failure } = state;
    const { loading } = state;

    if (!failure) {
        return (
            <>
                {loading ? (
                    <div>로딩 중..</div>
                ) : (
                    <>
                        <IssueList />
                    </>
                )}
            </>
        );
    } else {
        return (
            <>
                <Error />
            </>
        );
    }
};

export default LandingPage;
