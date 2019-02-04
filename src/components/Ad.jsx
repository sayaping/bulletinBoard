import React from 'react';
import styled from 'styled-components'

const AdContainer = styled.div`
    display : flex
    margin-bottom : 78px
`

const HL = styled.div`
    font-size : 18px
    line-height : 22px
    color : #1b2834
    margin-bottom : 4px
`
const TXT = styled.div`
    font-size : 14px
    line-height : 22px
    color : #68717c
    width : 100%
    word-break : break-all
    max-width : 325px
    margin-bottom : 4px

`
const PhoneStyle = styled.div`
    font-size : 14px
    line-height : 22px
`
const PHOTO = styled.div`
    margin-top: 6px
    width : 332px
    height : 250px 
    background-color : #efefef
    text-align : center
`

const Left = styled.div`
    min-width : 410px
`

const Right = styled(Left)`
    min-width : 200px
    margin-left : auto 
    position : relative
`
const Delete = styled.div`
    color: red
    position : absolute
    bottom : 0
    width : 178px
    height : 36px
    border : 2px solid #fa5e5b
    border-radius : 3px
    text-align : center
    line-height : 2em
`

const IMG = styled.img`
    width : 20px
    height : 20px
`

const handleClick = (keydelete, rend) => {
    localStorage.removeItem(keydelete)
    rend();
}

export const Ad = ({Hl, Txt, Phone, keydelete, rend}) => (
    <AdContainer>
        <Left>
            <HL>{Hl}</HL>
            <TXT>{Txt}</TXT>
            <PHOTO></PHOTO>
        </Left>
        <Right>
            <div>
                <IMG src="../src/img/call.png" alt="" />
                <PhoneStyle>✆  {Phone}</PhoneStyle>
            </div>
            <Delete onClick = {() => handleClick(keydelete, rend)}>Удалить</Delete> 
        </Right>
    </AdContainer>
)