const React = require('react');
const DefaultLayout = require('../layouts/default');

class Edit extends React.Component {
    render() {
        const { meat, id } = this.props;
        return (
            <DefaultLayout>
                <form action={`/api/meats/${id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={meat.name} /> <br />
                    Cut: <input type="text" name="cut" defaultValue={meat.cut} /> <br />
                    Quality: <input type="text" name="quality" defaultValue={meat.quality} /> <br />
                    Is It Fresh:
                    <input type="checkbox" name="isItFresh" defaultChecked={meat.isItFresh} /> <br />
                    <input type="submit" value="Edit Meat" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;
