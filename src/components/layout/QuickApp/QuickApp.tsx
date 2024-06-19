import useStyles from "./style";

const QuickApp = () => {
    const style = useStyles();
    return (
        <section className={style.item}>
            <h1>Let’s Start With Quick App</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <button className={style.button}>Request For Early Access</button>
        </section>
    );
}

export default QuickApp;