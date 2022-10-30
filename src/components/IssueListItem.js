import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import date from "../utils/date";
import Label from "./Label";

const IssueListItem = memo(({ issueData, commercial, labels }) => {
    const { number, title, created_at, comments, user } = issueData;
    console.log(user);
    const navigate = useNavigate();

    const onDetailPage = () => {
        console.log("hi");
        navigate(`/detail`, {
            state: {
                issueData,
            },
        });
    };
    if (commercial === 4) {
        return (
            <ListItemWrapper>
                <a href=" https://www.wanted.co.kr">
                    <img
                        className="wanted_commercial"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=300&q=50"
                        alt="wanted_commercial"
                    />
                </a>
            </ListItemWrapper>
        );
    } else {
        return (
            <ListItemWrapper onClick={onDetailPage}>
                <div>
                    <NumberAndTitle>
                        <div>#{number}</div>
                        <div>{title.length >= 10 ? title.trim() : title}</div>
                    </NumberAndTitle>
                    <div style={{ display: "flex" }}>
                        {labels &&
                            labels.map((item, i) => (
                                <Label labels={item} key={i} />
                            ))}
                    </div>

                    <div style={{ display: "flex" }}>
                        <div>
                            opened on {date(created_at)} by {user["login"]}{" "}
                        </div>
                    </div>
                </div>
                <div style={{ fontWeight: "bold" }}>
                    <i className="fa-regular fa-message"></i> {comments}
                </div>
            </ListItemWrapper>
        );
    }
});

export default IssueListItem;

const NumberAndTitle = styled.div`
    display: flex;
    margin-left: 10px;
    > div {
        text-align: start;
        padding: 5px;
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

const ListItemWrapper = styled.div`
    display: flex;
    padding-bottom: 8px;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: space-between;
`;
