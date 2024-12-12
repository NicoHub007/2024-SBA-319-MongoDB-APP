const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { drinks } = this.props;
        return (
            <DefaultLayout title="Drinks Inventory">
                <header>
                    <h1>Drinks Inventory</h1>
                </header>
                <div className="add-container">
                    <a href="/api/drinks/new" className="add-button">Add New Drink</a>
                </div>
                <ul className="list">
                    {drinks.map((drink) => (
                        <li key={drink._id}>
                            <img src={drink.image} alt={drink.name} />
                            <h2>{drink.name}</h2>
                            <nav>
                                <a href={`/api/drinks/${drink._id}`}>Details</a>
                                <a href={`/api/drinks/${drink._id}/edit/`}>Edit</a>
                                <form action={`/api/drinks/${drink._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                            </nav>
                        </li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;
