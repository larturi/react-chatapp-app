import React from 'react';
import { MessageIncoming } from './MessageIncoming';
import { MessageOutgoing } from './MessageOutgoing';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const msgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="mesgs">

            <div className="msg_history">

                {
                    msgs.map( msg => (
                        (msg % 2) 
                            ? <MessageIncoming key={msg}/> 
                            : <MessageOutgoing key={msg}/>
                    ))
                }

            </div>

            <SendMessage />

        </div>
    )
}
