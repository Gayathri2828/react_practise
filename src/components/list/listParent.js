

export const ListParentOrdered = () =>{
    return <ol>
        <ListItems></ListItems>
    </ol>
};

export const ListParentUnordered = () =>{
    return <ul>
        <ListItems></ListItems>
    </ul>
};

const ListItems=()=>{
    return (
        <div>
            <li>Apple</li>
            <li>Banana</li>
            <li>orange</li>
            <li>grapes</li>
        </div>
    );
};