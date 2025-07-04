import ProfilePic from './assets/profile1.jpg';

function Card(props) {
    return (
        <div className="card">
        <img className='card-img' alt="profile picture" src={props.profilePic}></img>
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-description'>{props.desc}</p>
        </div>
    );
}

Card.defaultProps = {
    name: "Default Name",
    profilePic: ProfilePic,
    desc: "Default Description"
};

Card.prototypes = {
    name: String,
    profilePic: String,
    desc: String
}

export default Card;