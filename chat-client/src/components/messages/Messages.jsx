import { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx';
import useConversation from '../../store/useConversation.js';

export default function Messages() {
  const { messages, loading } = useGetMessages();
  const {selectedConversation} = useConversation();
  const lastMessageRef = useRef();

  console.log('messages:', messages)

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages])

  return (
    <div className='pt-3 px-4 flex-1 overflow-auto'>

      {!loading && messages.length > 0 && messages.map((message) => (
        <div 
        key={message._id}
        ref={lastMessageRef}
        >
          <Message message={message} />
        </div>
      ))}

      { loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} /> )}

      {!loading && messages.length === 0 && (
        <p className='text-center pt-3'>No messages here. Send one to start a conversation with {selectedConversation.fullName.split(' ')[0]}.</p>
      )}
    </div>
  );
};
