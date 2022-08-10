import React, { useState, useEffect } from 'react';
import CommentBox from './CommentBox';



const MainBitna = () => {

    function addComnnet(data) {

        console.log(data);
    }
  return (
    <main className="main">
        <div className="feed">
            <img src='/images/img01.jpg' />

            {/* 댓글이 쓰여지는 공간 */}
            <ul></ul>

            {/* 댓글 입력란 */}
            <CommentBox updateData={addComnnet} />
        </div>
    </main>
  );
};

export default MainBitna;
