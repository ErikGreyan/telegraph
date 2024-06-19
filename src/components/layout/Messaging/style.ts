import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    items: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        marginBottom: "50px",
        "@media only screen and (max-width: 1050px)": {
            flexDirection: "column"
        },
        "& h1": {
            fontSize: "35px",
            color: "#00194A",
            marginBottom: "10px",
            "@media only screen and (max-width: 450px)": {
                fontSize: "30px"
            },
        },
        "& p": {
            lineHeight: "1.5",
            wordSpacing: "1px",
            color: "#00194A",
            marginBottom: "30px"
        },
        "& img": {
            width: "550px",
            objectFit: "cover",
            "@media only screen and (max-width: 1040px)": {
                width: "100%",
                height: "100%",
            },
        }
    },
});

export default useStyles;