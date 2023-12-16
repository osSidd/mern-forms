import Categorize from "../components/formBuilder/categorize";
import Cloze from "../components/formBuilder/cloze";
import Comprehension from "../components/formBuilder/comprehension";

import useCategorize from "../hooks/formBuilder/useCategorize";
import useCloze from "../hooks/formBuilder/useCloze";
import useComprehension from "../hooks/formBuilder/useComprehension";

export default function FormBuilder(){

    const categorize = useCategorize()
    const cloze = useCloze()
    const comprehension = useComprehension()

    return (
        <div className="mx-8 py-8">
            <h1 className="text-5xl font-bold">Form Builder</h1>
            <Categorize
                categorize={categorize}
            />
            {/* <Cloze
                cloze={cloze}
            />
            <Comprehension
                comprehension={comprehension}
            /> */}

        </div>
    )
}