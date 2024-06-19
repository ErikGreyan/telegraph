import useStyles from "./style";
import group from "../../img/group.jpg";

const Groups = () => {
    const style = useStyles();
    return (
        <section className={style.items}>
            <div>
                <img src={group} alt="Group" />
            </div>
            <div>
                <h1>Keep In Touch With The Groups Of People.</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
        </section>
    );
}

export default Groups;