import React from 'react';

export const MessageIncoming = ({msg}) => {
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="user.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{msg.mensaje}</p>
                    <span className="time_date"> 11:01 AM | June 9</span>
                </div>
            </div>
        </div>
    )
}
