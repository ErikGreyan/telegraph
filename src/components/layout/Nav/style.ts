import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "35px 90px",
        "@media only screen and (max-width: 450px)": {
            padding: "35px 5px",
        },
    },
    logo: {
        color: "#FF0043",
        fontWeight: "bold",
        fontSize: "25px"
    },
    button: {
        width: "96px",
        height: "36px",
        borderRadius: "50px",
        border: 0,
        background: "#FF0043",
        color: "#fff",
        cursor: "pointer",
        transition: "0.4s",
        "&:hover": {
            background: "#990028"
        }
    }
});

export default useStyles;