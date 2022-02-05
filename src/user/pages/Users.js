import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
    const USERS = [{id: 'u1', name: 'Rotem Librati', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgV1Zo4h6oyjQ_ZBTAxrM6xrPviTy2f7D5g&usqp=CAU", places: 3}];
    return <UsersList items={USERS}/>

};

export default Users;