function WithLoadingIndicator(Component, isLoading) {
    return (props) => {
        const newProps = {
            ...props,
            isLoading,
        };
        return <Component {...newProps} />
    }
}

export default WithLoadingIndicator;