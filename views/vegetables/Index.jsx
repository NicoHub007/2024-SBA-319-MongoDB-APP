const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        return (
            <DefaultLayout title="Vegetables Inventory">
                <header>
                    <h1>Vegetables Inventory</h1>
                </header>
                <div className="add-container">
                    <a href="/api/vegetables/new" className="add-button">Add New Vegetable</a>
                </div>
                <ul className="list">
                    {vegetables.map((vegetable) => (
                        <li key={vegetable._id}>
                            <img src={vegetable.image} alt={vegetable.name} />
                            <h2>{vegetable.name}</h2>
                            <nav>
                                <a href={`/api/vegetables/${vegetable._id}`}>Details</a>
                                <a href={`/api/vegetables/${vegetable._id}/edit/`}>Edit</a>
                                <form action={`/api/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </ nav>
                        </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
