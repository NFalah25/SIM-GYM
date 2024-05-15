function Label({classNames = 'block text-sm font-medium text-slate-200', value, children, ...props}){
    return (
        <label {...props} className={classNames}>{value || children}</label>
    )
}

export default Label;
