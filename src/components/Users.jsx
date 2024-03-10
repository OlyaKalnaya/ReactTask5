import { useEffect, useRef, useState } from "react";


export function Users() {

    const [users, setUsers] = useState([]);

    const name = useRef();
    const lastName = useRef();
    const email = useRef();

    const btnHandler = () => {
        setUsers([...users, {
            name: name.current.value,
            lastName: lastName.current.value,
            email: email.current.value
        }])

    }

    useEffect( () => {
        console.log(users);
    }, [users]) 

    return (
        <>
            <label>Name
                <input type="text" ref={name} />
            </label>

            <label>Last name
                <input type="text" ref={lastName} />
            </label>

            <label>Email
                <input type="text" ref={email}/>
            </label>

            <button onClick={btnHandler}>Click</button>

            <ul>
                {users.map((user, idx) => <li key={idx}>{user.name}</li>)}
            </ul>
        </>
    )

}