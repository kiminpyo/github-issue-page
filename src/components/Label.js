import React from "react";
import styled from "styled-components";
const Label = ({ labels }) => {
    const { name, color } = labels;

    return (
        <LabelWrapper color={color}>
            {name.length >= 7 ? name.slice(0, 7) : name}
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
    background-color: #${(props) => props.color};
`;
