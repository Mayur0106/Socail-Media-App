import "./post.css"
import {MoreVert} from "@mui/icons-material"
export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUserName">MAyur Shinde</span>
                    <span className="postDate"> 5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter"></div>
              <span className="postText">Hey! Its my first post</span>
           <img src="assets/post/1.jpeg" alt="" className="postImg"/>
            <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon"src="assets/like.png" alt="" />
                    <img className="likeIcon"src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 9 comments</span>
                    </div>
            </div>
        </div>
    </div>
  )
}
