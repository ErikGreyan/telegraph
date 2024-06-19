import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            textDecoration: "none",
            listStyle: "none",
            fontFamily: "Comfortaa",
        },
        "::selection": {
            color: "#fff",
            background: "#FF0043",
        },

        "::-webkit-scrollbar": {
            width: "12px",
            height: "12px",
        },

        "::-webkit-scrollbar-track": {
            background: "#990028",
        },

        "::-webkit-scrollbar-thumb": {
            background: "#FF0043",
            borderRadius: "10px",
        }
    }
});

export default useStyles;