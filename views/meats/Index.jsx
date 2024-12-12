const React = require('react');
const DefaultLayout = require('../layouts/default');

class Index extends React.Component {
    render() {
        const { meats } = this.props;
        return (
            <DefaultLayout title="Meats Inventory">
                <header>
                    <h1>Meats Inventory</h1>
                </header>
                <div className="add-container">
                    <a href="/api/meats/new" className="add-button">Add New Meat</a>
                </div>
                <ul className="list">
                    {meats.map((meat) => (
                        <li key={meat._id}>
                            <img src={meat.image} alt={meat.name} />
                            <h2>{meat.name}</h2>
                            <nav>
                                <a href={`/api/meats/${meat._id}`}>Details</a>
                                <a href={`/api/meats/${meat._id}/edit/`}>Edit</a>
                                <form action={`/api/meats/${meat_id}?_method=DELETE`} method="POST">
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
