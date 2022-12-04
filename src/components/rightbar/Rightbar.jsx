import "./rightbar.css"

export default function Rightbar(){
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                        <img src="assets/gift.png" alt="" className="birthdayImg" />
                        <span className="birthdayText"> <b> Yash Wable</b>and <b>3 other friends hava </b> a brithday today</span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt=""  />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Shantanu Jalkote </span>
                    </li>
                </ul>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Atharva Jadhav</span>
                    </li>
                </ul><ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName"> Prakash </span>
                    </li>
                </ul><ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                             <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUserName">Sksham </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}