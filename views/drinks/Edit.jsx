const React = require('react');
const DefaultLayout = require('../layouts/default');

class Edit extends React.Component {
    render() {
        const { drink, id } = this.props; // 'vegetable' is replaced with 'drink'
        return (
            <DefaultLayout>
                <h1>Edit Drink</h1>
                <form action={`/api/drinks/${id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={drink.name} /> <br />
                    Color: <input type="text" name="color" defaultValue={drink.color} /> <br />
                    Caffeine:
                    {drink.caffeine ? (
                        <input type="checkbox" name="caffeine" defaultChecked />
                    ) : (
                        <input type="checkbox" name="caffeine" />
                    )}
                    <br />
                    <input type="submit" value="Update Drink" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;
