import React, { useContext } from 'react';
import { ChatContext } from '../../context/chat/ChatContext';
import { types } from '../../types/types';

import { fetchConToken } from '../../helpers/httpClient';
import { scrollToBottom } from '../../helpers/scrollToBottom';


export const SidebarChatItem = ({ usuario }) => {

    const { chatState, dispatch } = useContext(ChatContext)
    const { chatActivo } = chatState;

    const onClick = async () => {

        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        });

        // Cargar los mensajes del chat seleccionado
        const resp = await fetchConToken(`mensajes/${ usuario.uid }`);
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes
        });

        // Mover el scroll
        scrollToBottom('mensajes');

    };

    return (
        <div
            className={`chat_list ${ (usuario.uid === chatActivo) && 'active_chat' }`}
            onClick={onClick}
        >
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="user.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{usuario.nombre}</h5>
                    {
                        (usuario.online)
                         ? <span className="text-success">Online</span>
                         : <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
};
