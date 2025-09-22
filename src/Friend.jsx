export default function Friend({friend}){

    // console.log(friend);
    const {name,email,phone} = friend;
    return(
        <div className="card">
            <h3> name: {name}</h3>
            <p>email : {email}</p>
            <p>phone : {phone}</p>

        </div>
    )
}