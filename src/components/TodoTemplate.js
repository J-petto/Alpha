import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    
    position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정*/
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin 0 auto; /* 페이지 중앙에 위치하기 위함 (좌우 정렬 중앙) */

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex; /* 가로로 아이템들이 배치됨 width 값 만큼 자리를 차지함  */
    flex-direction: column;
`;

    //children으로 함수 적용은 검색 해서 공부해보기
    function TodoTemplate({ children }) {
        return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
      }

    export default TodoTemplate;