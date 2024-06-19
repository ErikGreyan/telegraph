import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "35px 90px",
        "@media only screen and (max-width: 840px)": {
            justifyContent: "center",
            flexDirection: "column",
            padding: "35px 0"
        },
    },
    p: {
        fontWeight: "bold",
        color: "#00194A"
    },
    ul: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& li": {
            margin: "15px",
            "& a": {
                color: "#00194A",
                transition: "0.4s",
                "&:hover": {
                    color: "#FF0043",
                }
            }
        }
    }
});

export default useStyles;