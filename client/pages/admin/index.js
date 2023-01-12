import React from 'react';
import {  PageContainer } from "../../styles/global-style";
import AdminNav from './../components/AdminNav';
import styled from "styled-components";


const index = () => {
  return (
    <PageContainer>
        <FlexWrap>
            <AdminNav/>
            <ContainerBoard>
                <h1 style={{fontSize:"2em", marginBottom:"0.5rem"}}>펀딩허락테이블</h1>
                <p style={{marginBottom:"1rem"}}>신중하게 허락해라</p>
                <div>
                    <div style={{padding:"1rem"}}>Data table Example</div>
                    <Row>
                        <div>
                            <label htmlFor="">{"Show "}
                                <select name="" id="">
                                    <option value="">10</option>
                                    <option value="">25</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                </select> {"entries"}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                {"Search:"}
                            </label>
                            <input type="text" />
                        </div>
                    </Row>
                </div>
            </ContainerBoard>
        </FlexWrap>
    </PageContainer>
  )
}

const FlexWrap = styled.div`
    display:flex;
`
const ContainerBoard = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    >:nth-child(1){
        font-size: 1.5rem;
    }
    >:nth-child(2){
        font-size: 1.5rem;
    }
`
export default index