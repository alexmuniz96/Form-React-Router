import styled from "styled-components"

export const Container = styled.div`
  p{
    font-size: 13px;
    color: #b8b8d4;
  }
  h1{
    margin:0;
    padding:0;
    font-size: 26px;
  }

  hr{
    height: 1px;
    border:0;
    background: #16195c;
    margin: 30px 0;
  }

  label{
    font-size: 13px;

    input{
      display:block;
      margin-top: 7px;
      box-sizing:border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 5px;
      color: #FFF;
      outline: 0;
      font-size: 15px;
      background: #02044a;
    }
  }

  button{
    background: #25cd89;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    
  }
`