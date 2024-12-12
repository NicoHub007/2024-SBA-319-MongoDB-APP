const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/styles/style.css" />
                    <title>Grilling Inventory Manager</title>
                </head>
                <body>
                    <header>
                        <h1>G!M | Grilling Inventory Manager</h1>
                        <nav>
                            <a href="/api/meats">Meats</a><a href="/api/vegetables">Vegetables</a><a href="/api/drinks">Drinks</a> 
                        </nav>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer className="footer">
                        <p>&copy; 2025 Grilling Inventory Manager | G!M</p>
                    </footer>
                </body>
            </html>
        );
    }  
}

module.exports = DefaultLayout;