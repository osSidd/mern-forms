import Categorize from "../components/formBuilder/categorize";
import Cloze from "../components/formBuilder/cloze";
import Comprehension from "../components/formBuilder/comprehension";

export default function FormBuilder(){
    return (
        <div className="mx-8 py-8">
            <h1 className="text-5xl font-bold">Form Builder</h1>
            <Categorize/>
            <Cloze/>
            <Comprehension/>
        </div>
    )
}