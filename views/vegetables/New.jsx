const React = require('react');
const DefaultLayout = require('../layouts/default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>Add New Vegetable</h1>
                <form action="/api/vegetables" method="POST">
                    Name: <input type="text" name="name" /> <br />
                    Color: <input type="text" name="color" /> <br />
                    Is It Fresh: <input type="checkbox" name="isItFresh" /> <br />
                    <input type="submit" value="Add Vegetable" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
