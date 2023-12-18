import { useEffect, useState } from "react"

export default function FormRender(){

    const [forms, setForms] = useState([])

    useEffect(() => {
        fetchForms()
    }, [])

    async function fetchForms(){
        const response = await fetch(`${import.meta.env.VITE_URL}/api/forms`)
        if(!response.ok) return 

        const data = await response.json()
        setForms(data)
    }

    console.log(forms)

    return(
        <div className='text-center'>
            <h1 className="text-3xl">Form Render</h1>
            {
                forms.map(form => {
                    return (
                        <div key={form._id}>
                            <h2>{form.heading}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}