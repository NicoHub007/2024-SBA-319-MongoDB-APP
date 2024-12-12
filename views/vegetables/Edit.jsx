const React = require('react');
const DefaultLayout = require('../layouts/default');

class Edit extends React.Component {
    render() {
        const { vegetable, id } = this.props;
        return (
            <DefaultLayout>
                <h1>Edit Vegetable</h1>
                <form action={`/api/vegetables/${id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={vegetable.name} /> <br />
                    Color: <input type="text" name="color" defaultValue={vegetable.color} /> <br />
                    Is It Fresh:
                    {vegetable.isItFresh ? (
                        <input type="checkbox" name="isItFresh" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isItFresh" />
                    )}
                    <br />
                    <input type="submit" value="Update Vegetable" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;
