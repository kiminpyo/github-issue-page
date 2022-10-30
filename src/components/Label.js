import React from "react";
import styled from "styled-components";
const Label = ({ labels }) => {
    const { name, color } = labels;
    console.log(labels);
    return (
        <LabelWrapper background={color}>
            {name}
        </LabelWrapper>
    );
};

export default Label;

const LabelWrapper = styled.div`
    font-size: 0.8rem;
    font-weight: bold;

    border-radius: 50px;
    margin: 10px;
    padding: 5px;

    background-color: #${(props) => props.background};
`;
