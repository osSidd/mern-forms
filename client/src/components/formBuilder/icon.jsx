export default function Icon({handleClick, icon, color='gray'}){
    return(
        <span
            className={`text-${color}-500 text-4xl -mt-1 ml-8 cursor-pointer`} 
            onClick={handleClick}
        >
            {icon}
        </span>
    )
}
