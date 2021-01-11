import {createMuiTheme} from "@material-ui/core";
import {indigo, purple} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: purple
    },
    typography: palette => {
        return {
            fontFamily: 'Roboto'
        }
    }
})

export default theme
