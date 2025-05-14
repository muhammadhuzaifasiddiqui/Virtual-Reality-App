import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code-removebg-preview.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Accelerate your 
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                {" "}coding workflow.
            </span>
        </h2>

        <div className="flex flex-wrap justify-center"> 
            <div className="p-2 w-full lg:w-1/2 m-auto">
                <img src={codeImg} alt="Code"/>
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex flex-col mb-12 justify-center items-center">
                        <div className="flex text-green-400 bg-neutral-900 h-10 w-10 p-2 rounded-full ">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl text-center">
                                {item.title}
                                <p className="text-md text-center text-neutral-500">{item.description}
                                </p>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default Workflow