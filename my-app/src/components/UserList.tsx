import UserCard from "./UserCard";

function UserList() {
    const users = [

        {
            name: "Lorita",
            age: 30,
            email: "lorita@example.com"
        },
        {
            name: "JaJa",
            age: 30,
            email: "jaja@example.com"
        }

    ];

    return (
        <div>
            {
                users.map((user, index) => (
                        <UserCard key={index} { ...user } />
                    )
                )
            }
        </div>
    )
}

export default UserList;