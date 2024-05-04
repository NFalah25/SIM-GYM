function Label({classNames = 'block text-sm font-medium text-gray-700', value, children, ...props}){
    return (
        <label {...props} className={classNames}>{value || children}</label>
    )
}

export default Label;
