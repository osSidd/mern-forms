import { getSize } from "../../utils/ui"

export default function Icon({icon, size='lg'}){

    const {size: textSize} = getSize(size)

    return(
        <span>
            <i className={`fa fa-${icon} ${textSize} text-gray-500 cursor-pointer`}></i>
        </span>
    )
}