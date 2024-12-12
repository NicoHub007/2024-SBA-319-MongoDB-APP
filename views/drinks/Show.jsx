const React = require('react');
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
    render() {
        const { drink } = this.props;
        return (
            <DefaultLayout title={`Details of ${drink.name}`}>
                <div className="container">
                    <div className="content">
                        <div className="image">
                            <img src={drink.image} alt={drink.name} />
                        </div>
                        <div className="details">
                            <h1>{drink.name}</h1>
                            <ul>
                                <li>Color: {drink.type}</li>
                                <li>Caffeine: {drink.caffeine ? "Yes" : "No"}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="back-button">
                        <a href="/api/drinks">
                            <button>Back to Drinks</button>
                        </a>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
