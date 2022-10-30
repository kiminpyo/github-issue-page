import React from "react";
import { useLocation } from "react-router-dom";
import date from "../utils/date";

import ReactMarkDown from "react-markdown";
import styled from "styled-components";
const DetailPage = () => {
    const location = useLocation();
    console.log(location.state);
    const { body, number, title, user, created_at, comments } =
        location.state.issueData;

    const markdown = `${body}`;

    return (
        <>
            <section>
                <IssueDetailWrapper>
                    <div style={{ width: "15%" }}>
                        <img
                            style={{ width: "100%" }}
                            src={`${user["avatar_url"]}`}
                            alt="user_avatar"
                        />
                    </div>
                    <div>
                        <NumberAndTitle>
                            <div>#{number}</div>

                            <div>{title}</div>
                        </NumberAndTitle>
                        <UserAndDate>
                            <div>작성자:{user["login"]}</div>
                            <div>작성일: {date(created_at)}</div>
                        </UserAndDate>
                    </div>
                    <Message>
                        <i className="fa-regular fa-message"></i>
                        {comments}
                    </Message>
                </IssueDetailWrapper>
            </section>
            <hr />
            <section>
                <div>
                    <ReactMarkDown className="markdown-body">
                        {markdown}
                    </ReactMarkDown>
                </div>
            </section>
        </>
    );
};

export default DetailPage;

const IssueDetailWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;

    @media (max-width: 767px) {
        padding: 15px;
    }
`;

const NumberAndTitle = styled.div`
    display: flex;
    margin-left: 10px;
    > div {
        padding-bottom: 3px;
        text-align: start;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
const UserAndDate = styled.div`
    display: flex;
    > div {
        padding: 10px;
        margin-top: 20px;
    }
`;

const Message = styled.div`
    margin: auto;
    margin-left: 14px;
`;
