import useStyles from "./style";
import comment from "../../img/comment.jpg";
import shield from "../../img/shield.jpg";
import share from "../../img/share.jpg";


const Sharing = () => {
    const style = useStyles();
    return (
        <section className={style.items}>
            <div className={style.txt}>
                <h1 className={style.h1}>Sharing Cool Stuff With Your Community</h1>
                <p className={style.p}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                <p className={style.p}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
            </div>
            <div className={style.info}>
                <div>
                    <div className={style.item}>
                        <img src={shield} alt="Shield" />
                        <h3>Security by Default</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div className={style.item}>
                        <img src={comment} alt="Comment" />
                        <h3>Say What's On Your Mind</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                </div>
                <div>
                    <div className={style.item}>
                        <img src={share} alt="Share" />
                        <h3>Document Share</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sharing;