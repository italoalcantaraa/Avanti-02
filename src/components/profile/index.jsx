import './style.css';

export default function Profile({ data }) {

    return (
        <div className="profile">
            <img src={data.avatar_url} alt="" />
            <div>
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
            </div>
        </div>
    );
}