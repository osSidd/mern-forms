import Icon from "./icon";

export default function Dropdown(){
    return(
        <div className="border border-gray-300 rounded-md py-3 px-4 flex items-center cursor-pointer">
            <div className="mr-2"><Icon icon='dot-circle-o' size="2xl"/></div>
            <div className="mr-auto">Multiple choice</div>
            <div className="-mt-2"><Icon icon='sort-down' size="md"/></div>
        </div>
    )
}