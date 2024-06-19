import useStyles from "./style";

const Nav = () => {
    const style = useStyles();
    return (
        <nav className={style.nav}>
            <div className={style.logo}>Telegraph</div>
            <button className={style.button}>Try Beta</button>
        </nav>
    );
}

export default Nav;