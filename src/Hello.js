import React from 'react';

function Hello({ color, name = '이름없음', isSpecial }) {
    return (
        <div style={{ color }}>
            {/* {isSpecial ? <b>*</b> : <b>-</b>}  */} 
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    )
}


export default Hello;