import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@media only screen and (max-width: 1040px)": {
            flexDirection: "column",
            textAlign: "center",
        },
    },
    txt: {
        width: "50%",
        padding: "0 20px",
        "@media only screen and (max-width: 1040px)": {
            width: "100%",
            marginBottom: "50px",
        }
    },
    h1: {
        fontSize: "60px",
        color: "#00194A",
        marginBottom: "10px",
        "@media only screen and (max-width: 750px)": {
            fontSize: "30px"
        },
    }, 
    p: {
        lineHeight: "1.5",
        wordSpacing: "1px",
        color: "#00194A",
        marginBottom: "10px"
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
    img: {
        width: "550px",
        height: "550px",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        "@media only screen and (max-width: 1040px)": {
            width: "100%",
            height: "100%",
        }
    }
});

export default useStyles;