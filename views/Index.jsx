const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/styles/index.css" />
                    <title>Grilling Inventory Manager</title>
                </head>
                <body>
                    <header>
                        <h1>G!M | Grilling Inventory Manager</h1>
                    </header>
                    <div className="button-container">
                        <h2>Welcome to G ! M</h2>
                        <a href="/api/meats" className="animated-button">Meats</a>
                        <a href="/api/vegetables" className="animated-button">Vegetables</a>
                        <a href="/api/drinks" className="animated-button">Drinks</a>
                    </div>
                    <footer>
                        <p>&copy; 2025 Grilling Inventory Manager | G!M</p>
                    </footer>
                </body>
            </html>
        );
    }
}

module.exports = Index;
