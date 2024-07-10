import { lighten, MenuItem } from "@mui/material";
import { secondaryColor, textPrimaryColor } from "../../../utils/styles/colors";

const Item = ({ name }) => {
    return (
        <MenuItem value="Contractor" sx={{ color: textPrimaryColor, ":hover": { bgcolor: lighten(secondaryColor, 0.2) } }}>{name}</MenuItem>
    )
}

export default Item;