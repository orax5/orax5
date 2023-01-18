import React,{useState} from 'react';
import styled from "styled-components";

const creator = () => {
  const [isCheckType, setIsCheckType] = useState(false);
  const [form, setForm] = useState({
    email:"",
    password:"",
    rePassword:"",
    nickname:"",
    user: null,
    creator: null,
  })

  
  const viewCreatorHandler = () => {
    setIsCheckType(true);
  }
  const viewUserHandler = () => {
    setIsCheckType(false);
  }

  console.log("유저", form.user);
  console.log("크리에이터", form.creator);
  console.log("이메일", form.email);
  console.log("닉넴" ,form.nickname);
  console.log("비번" , form.password);
  console.log("비번확인" ,form.rePassword);

  return (
    <MainContainer>
      <div></div>

      <div style={{marginTop:"10rem"}}>
      <header>
        <h2>회원가입</h2>
       </header> <br />
      
          <div>
            <input 
              type="radio" id="user" 
              defaultValue={form.user} name="type" 
              onClick={viewUserHandler}
              onChange={e=>setForm({...form, user:e.target.value})}/> &nbsp;
            <label htmlFor="user">유저</label> &nbsp;
            <input 
              type="radio" id="creator" 
              defaultValue={form.creator} name="type"
              onClick={viewCreatorHandler}
              onChange={e=>setForm({...form, creator:e.target.value})}/> &nbsp;
            <label htmlFor="creator">크리에이터</label>
          </div>
          {
            isCheckType == false
            ?
            <>
            <InputBox>
              <input 
                id="username" type="email" 
                name="username" placeholder="이메일" 
                defaultValue={form.email}
                onChange={e=>setForm({...form, email:e.target.value})}/>
              <label htmlFor="username">이메일</label>
            </InputBox>
            <InputBox>
              <input 
                id="nickname" type="text" 
                name="nickname" placeholder="닉네임"
                defaultValue={form.nickname}
                onChange={e=>setForm({...form, nickname:e.target.value})} />
              <label htmlFor="username">닉네임</label>
            </InputBox>
            <InputBox>
              <input 
                id="password" type="password" 
                name="password" placeholder="비밀번호" 
                defaultValue={form.password}
                onChange={e=>setForm({...form, password:e.target.value})} />
              <label htmlFor="password">비밀번호</label>
            </InputBox>
            <InputBox>
              <input 
                id="password" type="password" 
                name="password" placeholder="비밀번호확인" 
                defaultValue={form.rePassword}
                onChange={e=>setForm({...form, rePassword:e.target.value})} />
              <label htmlFor="password">비밀번호확인</label>
            </InputBox>
            <Submit type="submit" value="회원가입" />
            </>
            :
            <>
             <InputBox>
              <input 
                id="username" type="email" 
                name="username" placeholder="이메일" 
                defaultValue={form.email}
                onChange={e=>setForm({...form, email:e.target.value})}/>
              <label htmlFor="username">이메일</label>
            </InputBox>
            <InputBox>
              <button>이메일 확인</button>
            </InputBox>
            <InputBox>
              <input 
                id="nickname" type="text" 
                name="nickname" placeholder="닉네임"
                defaultValue={form.nickname}
                onChange={e=>setForm({...form, nickname:e.target.value})} />
              <label htmlFor="username">닉네임</label>
            </InputBox>
            <InputBox>
              <input 
                id="password" type="password" 
                name="password" placeholder="비밀번호" 
                defaultValue={form.password}
                onChange={e=>setForm({...form, password:e.target.value})} />
              <label htmlFor="password">비밀번호</label>
            </InputBox>
            <InputBox>
              <input 
                id="password" type="password" 
                name="password" placeholder="비밀번호확인" 
                defaultValue={form.rePassword}
                onChange={e=>setForm({...form, rePassword:e.target.value})} />
              <label htmlFor="password">비밀번호확인</label>
            </InputBox>
            <Submit type="submit" defaultValue="회원가입" />
            </>
          }

        
          
  
      </div>

      <div></div>
    </MainContainer>
  )
}
const MainContainer = styled.div`
  ${(props) => props.theme.gridLayout.mainGrid};
`;
const InputBox = styled.div`
  position:relative;
  margin:10px 0;
  > input {
    background:transparent;
    border:none;
    border-bottom: solid 1px #ccc;
    padding:20px 0px 5px 0px;
    font-size:14pt;
    width:100%;
  }
  > input::placeholder {
    color:transparent;
  }
  /* 이것도 있어야함 아래랑 세트 */
  > input:placeholder-shown + label{
    color: #aaa;
    font-size:14pt;
    top:15px;
  }
  /* 이거해야 왔다갔다함 */
  > input:focus + label, label{
    color:#8aa1a1;
    font-size:10pt;
    pointer-events: none;
    position: absolute;
    left:0px;
    top:0px;
    transition: all 0.2s ease ;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
  }
`
  const Submit = styled.input`
    background-color: #8aa1a1;
    border:none;
    color:white;
    border-radius: 5px;
    width:100%;
    height:35px;
    font-size: 14pt;
    margin-top:1rem;
  `
export default creator