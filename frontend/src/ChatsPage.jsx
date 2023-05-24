import {MultiChatSocket, MultiChatWindow, useMultiChatLogic}from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('485064bc-6aab-46be-a3bc-18563f4db820',props.user.username,props.user.secret);
    return(
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>   
    </div>
    )
}

export default ChatsPage