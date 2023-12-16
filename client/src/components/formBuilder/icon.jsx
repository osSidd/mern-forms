export default function Icon({id, field, handleClick, icon, color='gray'}){
    return(
        <span
            id={id}
            data-field={field}
            className={`text-${color}-500 text-4xl -mt-1 ml-8 cursor-pointer`} 
            onClick={handleClick}
        >
            {icon}
        </span>
    )
}
