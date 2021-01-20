import React from "react";
import Smile1Button from "./Smile1Button";
import Smile2Button from "./Smile2Button";
import Smile3Button from "./Smile3Button";
import Smile4Button from "./Smile4Button";
import Smile5Button from "./Smile5Button";
import Smile6Button from "./Smile6Button";
import Smile7Button from "./Smile7Button";

function MoodTable() {

    return <table>
        <tbody>
        <tr>
            <td><Smile1Button/></td>
            <td><Smile2Button/></td>
            <td><Smile3Button/></td>
            <td><Smile4Button/></td>
            <td><Smile5Button/></td>
            <td><Smile6Button/></td>
            <td><Smile7Button/></td>
        </tr>
        </tbody>

    </table>
}

export default MoodTable;