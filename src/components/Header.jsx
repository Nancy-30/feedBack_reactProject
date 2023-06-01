import propTypes from 'prop-types';

function Header({text , bgColor , textColor}) {
    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
} 

Header.defaultProps = {
    bgColor:'pink' ,
    textColor:'black', 
    text : 'FeedBack UI'
}

// type checking
Header.propTypes = {
    text:propTypes.string,
    bgColor:propTypes.string,
    textColor:propTypes.string,
}

export default Header
