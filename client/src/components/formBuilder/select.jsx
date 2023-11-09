export default function Select({options, name, id}){
    return (
            <select className="border border-gray-400 px-4 py-2 rounded-md w-7/12" name={name} id={id}>
                <option disabled>select category</option>
                {
                    options.map(item => (
                        <option className="p-2" value={item}>{item}</option>
                    ))
                }
            </select>
    )
}