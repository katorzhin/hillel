const Item = () => {
    return (
        <li className="list-group-item">
      <pre className="m-0">
        {`{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male"
}`}
      </pre>
        </li>
    );
};

export default Item;
