const React = require('react');
const DefaultLayout = require('../layouts/default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add New Meat">
                <h1>Add New Meat</h1>
                <form action="/api/meats" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Cut: <input type="text" name="cut" /><br />
                    Quality: <input type="text" name="quality" /><br />
                    Is It Fresh: <input type="checkbox" name="isItFresh" /><br />
                    <input type="submit" value="Add Meat" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
