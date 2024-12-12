const React = require('react');
const DefaultLayout = require('../layouts/default');

class Show extends React.Component {
    render() {
        const { meat } = this.props;
        return (
            <DefaultLayout title={`Details of ${meat.name}`}>
                <div className="container">
                    <div className="content">
                        <div className="image">
                            <img src={meat.image} alt={meat.name} />
                        </div>
                        <div className="details">
                            <h1>{meat.name}</h1>
                            <ul>
                                <li>Cut: {meat.cut}</li>
                                <li>Quality: {meat.quality}</li>
                                <li>Fresh: {meat.isItFresh ? "Yes" : "No"}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="back-button">
                        <a href="/api/meats">
                            <button>Back to Meats</button>
                        </a>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
