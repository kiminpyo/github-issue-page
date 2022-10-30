import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
    const location = useLocation();

    const headerInDetail = (
        <>
            <HeaderWrapper>
                <Link to="/">
                    <i class="fa-brands fa-angular"></i>Angular
                </Link>{" "}
                / Angular-cli
            </HeaderWrapper>
        </>
    );
    const headerInMain = (
        <HeaderWrapper>
            <i class="fa-brands fa-angular"></i>Angular
        </HeaderWrapper>
    );
    return (
        <div
            style={{
                width: "60%",
                marginLeft: "20%",
                justifyContent: "center",
                display: "flex",
            }}>
            {location.pathname === "/detail" ? headerInDetail : headerInMain}
        </div>
    );
};

export default Nav;

const HeaderWrapper = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 50px;
    padding: 30px;
    line-height: 1;
`;
