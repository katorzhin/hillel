const Form = () => {
    return (
        <form className="form-container">
            <input type="text" placeholder="https://swapi.dev/api/" />
            <input type="text" placeholder="people/1/" />
            <button type="submit">Get info</button>
        </form>
    );
};

export default Form;




