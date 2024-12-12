const React = require('react');
const DefaultLayout = require('../layouts/default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>Add New Drink</h1>
                <form action="/api/drinks" method="POST">
                    Name: <input type="text" name="name" /> <br />
                    Color: <input type="text" name="color" /> <br />
                    Caffeine:
                    <input type="checkbox" name="caffeine" /> <br />
                    <input type="submit" value="Add Drink" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
