export default function QuestionWrapper({children, heading=false}){
    return (
        <div className="rounded-xl overflow-hidden shadow-md w-7/12 mx-auto mt-6">
            <div className={`px-4 py-6 w-full mx-auto bg-white ${heading ? 'border-t-gray-700 border-t-8' : 'border-l-blue-600 border-l-8'}`}>
                {children}
            </div>
        </div>
    )
}