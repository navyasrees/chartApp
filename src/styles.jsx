import styled from "styled-components";
export const Container = styled.div`
  display: "grid";
  width: 80%;
  margin-top: 60px;
  margin-left: 60px;
`;

export const Rate = styled.div`
  margin-bottom: 10px;
  font-family: "Circular Std";
  font-size: 70px;
  font-weight: 400;
  line-height: 89px;
`;
export const Unit = styled.div`
  color: rgba(189, 190, 191, 1);
  font-weight: 400;
  font-family: "Circular Std";
  font-size: 24px;
  line-height: 30px;
  margin-left: 8px;
  transform: translateY(13px);
`;

export const RateUnit = styled.div`
  display: flex;
  flex-gap: 8px;
`;

export const ConversionRate = styled.div`
  color: rgba(103, 191, 107, 1);
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 40px;
`;

export const Navigationbar = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 30px;
  margin-right: 30px;
`;

export const Title = styled.div`
  color: rgba(111, 113, 119, 1);
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
`;
