import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getData } from "../apis/octokit";
import { StateContext } from "../App";
import IssueListItem from "./IssueListItem";
import Loader from "./Loader";

const IssueList = () => {
    const state = useContext(StateContext);
    const { issueData } = state;
    const [target, setTarget] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemLists, setItemLists] = useState(issueData);

    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.7,
            });
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target]);

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
            observer.unobserve(entry.target);
            await nextIssueItem();
            observer.observe(entry.target);
        }
    };
    let num = 2;
    const nextIssueItem = async () => {
        setIsLoaded(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        const request = await getData(num);
        setItemLists((prev) => prev.concat(request));
        setIsLoaded(false);
        num++;
    };
    console.log(itemLists);
    return (
        <IssueListWrapper>
            {itemLists &&
                itemLists.map((item, i) => (
                    <IssueListItem
                        key={
                            item?.assignee?.["id"] ? item?.assignee?.["id"] : i
                        }
                        issueData={item}
                        commercial={i}
                        labels={item.labels}
                    />
                ))}
            <div style={{ border: "1px solid black" }} ref={setTarget}>
                {isLoaded && <Loader />}
            </div>
        </IssueListWrapper>
    );
};

export default IssueList;

const IssueListWrapper = styled.div`
    border: 30px whitesmoke;
    border-style: outset;
    width: 60%;
    margin-left: 20%;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
    box-shadow: palevioletred;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;
