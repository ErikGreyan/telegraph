import useStyles from "./style";
import messaging from "../../img/messaging.jpg";

const Messaging = () => {
    const style = useStyles();
    return (
        <section className={style.items}>
            <div>
                <img src={messaging} alt="Messaging" />
            </div>
            <div>
                <h1>Simple, Personal, Real Time Messaging</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
            </div>
        </section>
    );
}

export default Messaging;