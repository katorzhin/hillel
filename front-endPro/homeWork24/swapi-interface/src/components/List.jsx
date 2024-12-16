import Item from './Item.jsx';

const List = () => {
    return (
        <div>
            <ul className="list-group">
                <Item/>
                <Item/>
                <Item/>
            </ul>
        </div>
    );
};

export default List;
