import useStyles from "./style";

const Footer = () => {
    const style = useStyles();
    return (
        <footer className={style.footer}>
            <div>
                <p className={style.p}>© Telegraph. 2024 — All rights reserved.</p>
            </div>
            <div>
                <ul className={style.ul}>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;