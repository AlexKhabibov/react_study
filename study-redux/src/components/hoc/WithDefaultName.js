import Hello from "./Hello";

function withDefaultName(WrappedComponent) {
    return function EnhancedComponent(props) {
        const newProps = {
            ...props,
            name: props.name || 'Гость',
        };

        return <WrappedComponent {...newProps} />;
    };
}

export const HelloWithDefaultName = withDefaultName(Hello);