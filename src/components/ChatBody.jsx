import React, { useEffect, useRef } from "react";
import autoAnimate from '@formkit/auto-animate'

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-white bg-opacity-40 backdro-blur-lg dropshadow-md mr-auto";

const parent = useRef(null);
const bottomRef = useRef(null);

useEffect(() => {
    bottomRef.current?.scrollIntoView({behaviour: 'smooth'})
}, [chat])

useEffect(()=>{
    parent.current && autoAnimate(parent.current)
} , [parent])
  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {chat.map((message, i) => {
        return (
          <div key={i} className={`border-[#999999] break-wrods border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${message.sender ==="ai" && aiStyle}`} >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}
     <div ref={bottomRef} className="h-3">

     </div>
    </div>
  );
};

export default ChatBody;
