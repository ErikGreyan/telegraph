import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    item: {
        padding: "50px 20px",
        borderRadius: "20px",
        background: "#00194A",
        textAlign: "center",
        margin: "0 50px",
        "& h1": {
            fontSize: "30px",
            color: "#fff",
        },
        "& p": {
            width: "50%",
            color: "#999",
            margin: "30px auto",
            "@media only screen and (max-width: 650px)": {
                width: "100%",
            },
        }
    },
    button: {
        borderRadius: "50px",
        border: 0,
        background: "#FF0043",
        color: "#fff",
        cursor: "pointer",
        padding: "10px 15px",
        transition: "0.4s",
        "&:hover": {
            background: "#990028"
        }
    },
});

export default useStyles;