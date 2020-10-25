const users = [];

const addUser = ({id, customername,mobilenumber,itemsordered}) => {
  customername = customername.trim().toLowerCase();
  mobilenumber = mobilenumber.trim().toLowerCase();

  const existingUser = users.find((user) => 
    user.customername === customername && user.mobilenumber === mobilenumber);

    if(existingUser){
    return {error:'Username taken'}
  }
  const user= {id, customername, mobilenumber,itemsordered}
  users.push(user);
  return {user};
}

const removeUser = () => {
    
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (mobilenumber) => users.filter((user) => user.mobilenumber === mobilenumber);
    


module.exports = {addUser, getUser, getUsersInRoom}