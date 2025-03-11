
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function CalculatorBMI(){

    const [height,setheight]=useState("");
    const [weight,setweight]=useState("");
    const [gender,setgender]=useState("");
    const [bmi ,setbmi]=useState("");

    const CalculatorBMI=(e)=>{
         e.preventDefault();

         if(!height  || !weight || !gender){
            toast.error ("please enter valid heigth, weight and gender");
            return;
         }
         const heightInMeter=height/100;
         const bmivalue=(weight/(heightInMeter*heightInMeter)).toFixed(2);
         setbmi(bmivalue);
         if(bmivalue <18.5){
            toast.warning("you are underweight.consider an advice from an healthCare ");

         }
         else if(bmivalue >= 18.5 && bmivalue<25.9){
            toast.success("you have normal weight.keep maintaining a healthy lifestyle");
         }
         else if(bmivalue >=25 && bmivalue <29.9){
            toast.warning("you are overweight.Consider seeking advice form a healthcare provider");

         }
         else {
            toast.error("you are an obese range.It is mentionaed to seek advice from a healthcare specialist..");

         }
    };
    return(
        <>
         <section className="bmi">
            <h1>BMI CALCULATOR</h1>
            <div className="container">
                <div className="wrapper">
                    <form onSubmit={CalculatorBMI}>
                        <div>
                            <label>HEIGHT</label>
                            <input type="number"
                             value={height}
                             onChange={(e)=> setheight(e.target.value)}
                                required
                             
                              />
                              <label >WEIGHT(kg)</label>
                              <input type="number" 
                              value={weight}
                              onChange={(e)=>setweight(e.target.value)}
                              required
                              />
                              <label >GENDER</label>
                              <select value={gender} onChange={(e)=>setgender(e.target.value)}>
                                <option value="select Gender">select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            
                              

                        </div>
                        <button type="Submit">Calculate BMI</button>
                    </form>
                </div>
                <div className="wrapper">
                    <img src="/bmi.jpg" alt="not found" />
                </div>
            </div>
         </section>
        </>
    )
}
export default CalculatorBMI;