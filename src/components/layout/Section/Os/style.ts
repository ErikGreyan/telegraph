import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    items: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "0 30px",
        marginBottom: "50px"
    },
    item: {
        width: "400px",
        boxShadow: "0 0 5px #999",
        borderRadius: "10px",
        margin: "10px auto",
        padding: "20px",
        "& img": {
            marginBottom: "20px",
        },
        "& h1, & p": {
            color: "#00194A",
            marginBottom: "20px",
        },
    },
    button: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& a": {
            textDecoration: "underline",
            color: "#666",
            transition: "0.4s",
            "&:hover": {
                textDecoration: "none",
                color: "#FF0043"
            }
        },
        "& button": {
            border: 0,
            background: "transparent",
            width: "20px",
            height: "20px",
            cursor: "pointer"
        }
    }
});

export default useStyles;