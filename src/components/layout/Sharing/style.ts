import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    items: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        marginBottom: "50px",
        "@media only screen and (max-width: 1050px)": {
            flexDirection: "column",
            justifyContent: "center",
        },
    },
    txt: {
        width: "40%",
        "@media only screen and (max-width: 1050px)": {
            width: "100%",
        },
    },
    h1: {
        color: "#00194A",
        marginBottom: "20px"
    },
    p: {
        color: "#999",
        marginBottom: "20px"
    },
    info: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    item: {
        width: "260px",
        borderRadius: "10px",
        padding: "20px",
        margin: "20px",
        boxShadow: "0 0 3px #999",
        "& img": {
            marginBottom: "10px"
        },
        "& h3": {
            color: "#00194A",
            marginBottom: "20px"
        },
        "& p": {
            color: "#999",
        },
    }
});

export default useStyles;