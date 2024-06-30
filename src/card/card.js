import { ImageComponents } from "../components/image/imageComponent"
import { Heading1 } from "../components/heading/headings"
import ButtonComponent from "../components/button/button"
import { ListParentOrdered } from "../components/list/listParent"

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