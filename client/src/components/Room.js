import react, { useEffect,useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import Headbar from './Headbar';
import Input from './Input';
import Messages from './Messages';

let socket;

const Room = ({ location }) => {
    const [customername, setName] = useState('');
    const [mobilenumber, setMobile] = useState('');
    const [itemsordered, setOrders] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const Endpoint = 'http://localhost:5000';

    useEffect (() => {
			console.log('useEffect');
        const { customername, mobilenumber, itemsordered } = queryString.parse(location.search);
        socket = io(Endpoint);
        setName(customername);
        setMobile(mobilenumber);
        setOrders(itemsordered);
       console.log("location.search", customername, mobilenumber, itemsordered );
        socket.emit('join', {customername,mobilenumber,itemsordered});
        return(() => {
            socket.emit('disconnect'); 
            socket.off();
        })
    }, [Endpoint, location.search]);

    useEffect(() => {
        socket.on('message',(message) => {
            setMessages([...messages,message]);
        })
    },[messages]);

    const sendMessage = (event) => {
			console.log(message, messages);

        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''))
        }
		}
		
console.log(message, messages);
    return(
      <div className="outerContainer">
		
        <div className="container">
          <Headbar mobilenumber={mobilenumber} />
          <Messages messages={messages} customername={customername} itemsordered={itemsordered}/>
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
      </div>
    )
}

export default Room;