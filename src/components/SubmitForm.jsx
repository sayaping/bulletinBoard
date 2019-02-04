import React from 'react';
import styled from 'styled-components'

const TitleSubmit = styled.div`
    font-size : 24px;
    line-height : 38px;
    color : #1b2834
    padding-top : 48px
    font-weight : bold
`

const TitleSubmitEnd = styled(TitleSubmit)`
    margin-bottom : 23px
`


const Headlines = styled.div`
    font-size : 14px;
    line-height : 22px;
    color : #68717c
    padding-bottom : 8px
    padding-top : 29px
`

const SmallInput = styled.form`
    width : 390px
    height : 36px
`
const LargeInput = styled.form`
    width : 390px
    height : 147px
`

const Inp = styled.input`
    width : 100%
    height : 100%
    border: 1px solid #f2f2f2
    outline: none
    border-radius : 3px
    background-color : #fcfcfc
    box-shadow: inset 0 1px 3px 0 rgba(27, 40, 52, 0.08)
    font-size : 10px
    font-size: 14px
    color: #68717c
    padding-left : 16px
    &:invalid:not(:placeholder-shown) {
        border-color: red;
    }
    &:valid:not(:placeholder-shown) {
        border-color: green;
    }
`

const InpPhone = styled(Inp)`
    
`

const LInp = styled.textarea`
    width : 100%
    height : 100%
    border: 1px solid #f2f2f2
    outline: none
    border-radius : 3px
    background-color : #fcfcfc
    box-shadow: inset 0 1px 3px 0 rgba(27, 40, 52, 0.08)
    font-size : 10px
    font-size: 14px
    color: #68717c
    padding-left : 16px
    padding-top : 8px
    resize : none
`


const Post = styled.button`
    margin-top : 29px
    border: none
    outline: none
    width : 141px
    height : 36px
    border-radius : 3px
    background-color : #2d74da
    font-size : 14px 
    color : #ffffff
`
const Cont = styled.div`
    display : flex
    justify-content : space-between
`

const Helper = styled.div`
    font-size : 14px
    line-height : 22px
    width : 160px
`

export const SubmitForm = ({setInput1, setInput2, setInput3, inputHl, inputTxt, inputPhone, post, headLineHelper, phoneHelper }) => (
    <div>
        <TitleSubmit>Подать объявление</TitleSubmit>
        <div className="headline">
            <Headlines>Заголовок</Headlines>
            <Cont>
                <SmallInput>
                    <Inp
                        type="text"
                        maxLength = "140"
                        placeholder="  "
                        pattern="{1,140}"
                        name="headline"
                        value={inputHl}
                        onChange={e =>setInput1(e.target.value)}
                        />
                </SmallInput>
                <Helper>
                    <div Style={"color : " + (headLineHelper==='Заполнено'  ? "#16c98d" : "#68717c")}>
                    Обязательное поле <br/>
                    {headLineHelper}</div>
                </Helper>
            </Cont>
        </div>
        <div className="txt">
            <Headlines>Текст объявления</Headlines>
            <Cont>
                <LargeInput>
                    <LInp
                        type="text"
                        maxLength = "300"
                        name="TextAd"
                        value={inputTxt}
                        onChange={e =>setInput2(e.target.value)}
                        />
                </LargeInput>
                <Helper> 
                    <div Style="color : #68717c">
                    Не более 300 символов</div>
                </Helper>
            </Cont>
        </div>
        <div className="phone">
            <Headlines>Телефон</Headlines>
            <Cont>
                <SmallInput>
                    <InpPhone
                        type="tel"
                        placeholder="+7 (___) ___-__-__" 
                        pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                        minLength="18"
                        maxLength="18"
                        name="PhoneNumber"
                        value={inputPhone}
                        onChange={e =>setInput3(e.target.value)}
                        />
                </SmallInput>
                <Helper>
                    <div Style={"color : " + (phoneHelper==='Заполнено'  ? "#16c98d" : "#68717c") + "; position : absolute"}>
                    Обязательное поле <br/>
                    {phoneHelper}
                    </div>
                </Helper>
            </Cont>
        </div>
        {/* <div className="city">Город</div>
        <div className ="photo">ФОТО</div> */}
        <button Style={"margin-top : 29px; border: none; outline: none; width : 141px; height : 36px; border-radius : 3px; font-size : 14px; color: #ffffff; background-color : " + (((phoneHelper==='Заполнено')&&(headLineHelper==='Заполнено'))  ? "#2d74da; cursor : pointer" : "#68717c; cursor: no-drop")} onClick={post}>Подать</button>
        <TitleSubmitEnd>Объявление</TitleSubmitEnd>
    </div>
);