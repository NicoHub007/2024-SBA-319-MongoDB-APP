const React = require('react');
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
    render() {
        const { vegetable } = this.props;
        return (
            <DefaultLayout title={`Details of ${vegetable.name}`}>
                <div className="container">
                    <div className="content">
                        <div className="image">
                            <img src={vegetable.image} alt={vegetable.name} />
                        </div>
                        <div className="details">
                            <h1>{vegetable.name}</h1>
                            <ul>
                                <li>Color: {vegetable.color}</li>
                                <li>Fresh: {vegetable.isItFresh ? "Yes" : "No"}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="back-button">
                        <a href="/api/vegetables">
                            <button>Back to Vegetables</button>
                        </a>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
