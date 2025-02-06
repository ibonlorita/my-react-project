
function ConditionalRender({ 
    isLoggedIn, 
    username, 
    }: {
        isLoggedIn: boolean;
        username: string;
    }) {

    return (
        <div>
            {isLoggedIn && <h2>Welcom, {username}!</h2>}
            {!isLoggedIn && <h2>Please log in</h2>}
            <p>Current User: {username || "Guest"}</p>
        </div>
    ); 
};

export default ConditionalRender;