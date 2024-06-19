import useStyles from "./style";
import img from "../../img/header.jpg"

const Header = () => {
    const style = useStyles();
    return (
        <header className={style.header}>
            <div className={style.txt}>
                <h1 className={style.h1}>Simple. Secure. Reliable messaging.</h1>
                <p className={style.p}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                <button className={style.button}>Request For Early Access</button>
            </div>
            <div className={style.img}>
                <img src={img} alt="Image" />
            </div>
        </header>
    );
}

export default Header;