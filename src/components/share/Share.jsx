import "./share.css"
import { PermMedia,Label,Room,EmojiEmotions } from "@mui/icons-material" 

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input
                placeholder="What's is your mind "
                className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionNext">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue"className="shareIcon"/>
                        <span className="shareOptionNext">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionNext">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions  htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionNext">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">share</button>
            </div>
        </div>
    </div>
  )
}
