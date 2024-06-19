import android from "../../../img/android.jpg";
import ios from "../../../img/ios.jpg";
import windows from "../../../img/windows.jpg";
import download from "../../../img/download.jpg";
import useStyles from "./style";

const Os = () => {
    const style = useStyles();
    return (
        <section className={style.items}>
            <div className={style.item}>
                <img src={android} alt="Android" />
                <h1>Android</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <div className={style.button}>
                    <a href="#">Try Beta For Free</a>
                    <button><img src={download} alt="Download" /></button>
                </div>
            </div>

            <div className={style.item}>
                <img src={ios} alt="iPhone" />
                <h1>iPhone</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <div className={style.button}>
                    <a href="#">Try Beta For Free</a>
                    <button><img src={download} alt="Download" /></button>
                </div>
            </div>

            <div className={style.item}>
                <img src={windows} alt="Windows" />
                <h1>Mac or Windows</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                <div className={style.button}>
                    <a href="#">Try Beta For Free</a>
                    <button><img src={download} alt="Download" /></button>
                </div>
            </div>
        </section>
    );
}

export default Os;