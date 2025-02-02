import React,{useState} from "react";

const Calculator = () => {

    const [input, setInput] =useState('0');
    const [output, setOutput] = useState('0');

    const keys=[
        
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'AC', '0', '=', '+',
        
        ];

    const handleClick =(value)=>{
            if(value === '='){
                try {

                    let result=eval(input).toString();
                   
                    if(result.length>10){
                        result=result.substring(0,10);
                    }
                    setOutput(result);
                    
                } catch (error) {
                    setOutput("Error");
                }
            }

            else if (value=== 'AC'){
                setInput('0');
                setOutput('0');
            }
            else if(value==="⌫"){
                setInput((curr)=>(
                    curr.length>1 ? curr.slice(0,-1):'0'
                ));
                
            }
            else if(input==""&&(value==='/' || value==='*' ||value==='+' ||value==='-')){
                alert("Enter valid input !");
            }
            else if (input==="0"){
                setInput(value);
                

            }
            else{
                setInput((curr)=>curr+value);}

           

    }

  return (
    
<div className="bg-white rounded-lg w-80 p-3 shadow-2xl border-black">
    {/*display*/}
    <div className="bg-black p-2 text-right rounded-lg mb-4  h-20">
        <div className="text-red-500 text-2xl">{input}</div>
        {/*change to input*/} 
        <div className="text-red-900 text-3xl font-bold">{output}</div>
        {/*change to output*/} 
    </div>
    {/* buttons*/}

    <div className="grid grid-cols-4 gap-4">
           
    {keys.map((btn) => (
    <button key={btn}
    onClick={()=> handleClick(btn)}
    className={`p-4 text-xl font-bold rounded-lg ${
        btn === '=' ? 'bg-blue-500 text-white  ' : 'bg-gray-400'
      } hover:bg-gray-600 transition-colors`}
      
    >
        {btn}
    </button>
    ))}



    </div>

</div>
  );
};

export default Calculator;