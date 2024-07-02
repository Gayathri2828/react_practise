import { ImageComponents } from "../image/imageComponent"
import { Heading1 } from "../heading/headings"
import ButtonComponent from "../button/button"
import { ListParentOrdered } from "../list/listParent"

export const Card = () => {
    return (
    <div>
        <Heading1></Heading1>
        <ImageComponents></ImageComponents>
        <ListParentOrdered></ListParentOrdered>
        <ButtonComponent></ButtonComponent>
    </div>
    );
};