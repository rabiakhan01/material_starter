import { lighten, MenuItem } from "@mui/material";
import { secondaryColor, textPrimaryColor } from "../../../utils/styles/colors";

const Item = ({ name }) => {
    console.log("value", name)
    return (
        <MenuItem value={name} sx={{ color: textPrimaryColor, ":hover": { bgcolor: lighten(secondaryColor, 0.2) } }}>{name}</MenuItem>
    )
}

export default Item;