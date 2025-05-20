import ButtonExample from "./ButtonExample";


function withStyles(WrappedComponent, styles) {
    return (props) => {
        const newProps = { ...props, styles };
        return <WrappedComponent {...newProps} />
    };
};

export const CompButtonWithStyles = withStyles(ButtonExample, { background: 'blue', color: 'white' });