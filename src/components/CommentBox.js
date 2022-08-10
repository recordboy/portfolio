import React, { useState, useEffect } from 'react';


const CommentBox = (props) => {

    const [text, setText] = useState('');
    const { updateData } = props;
    
    
    function changeInput(e) {
        setText(e.target.value);
    }

    function clickComment() {
        // 부모한테 전달받은 addComnnet 함수를 실행
        updateData(text);
    }
  return (
    <div className="CommentBox">
        <input type="text" onChange={changeInput}/>
        <button type="button" onClick={clickComment}>게시</button>
    </div>
  );
};

export default CommentBox;
