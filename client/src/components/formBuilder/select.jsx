export default function Select({options, name, id}){
    return (
        <div className="ml-auto">
            <select className="border border-gray-400 px-4 py-2 rounded-md" name={name} id={id}>
                <option disabled>select category</option>
                {
                    options.map(item => (
                        <option value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}