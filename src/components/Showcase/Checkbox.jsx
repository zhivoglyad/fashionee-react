const Checkbox = (props) => {
    const {
        divClassName,
        inputClassName,
        name,
        value,
        id,
        labelClassName,
        htmlFor,
        color,
        checked,
        onChange,
    } = props

    return (
        <div className={divClassName}>
            <input type='checkbox' name={name} value={value} className={inputClassName} id={id} checked={checked} onChange={onChange} />
            <label htmlFor={htmlFor} className={labelClassName}>{color}</label>
        </div>
    )
}

export default Checkbox