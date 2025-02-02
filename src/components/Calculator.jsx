import React,{useState} from "react";

const Calculator = () => {

    const [input, setInput] =useState('0');
    const [output, setOutput] = useState('0');

    const keys=[
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '=', '+',
        ];

    const handleClick =(value)=>{
            if(value === '='){
                try {
                    setOutput(eval(input).toString());
                } catch (error) {
                    setOutput("Error");
                }
            }

            else if (value=== 'C'){
                setInput('0');
                setOutput('0');
            }
            else if(value==='/' || value==='*' ||value==='+' ||value==='-'){
                alert("Enter valid input !");
            }
            else{
                setInput((curr)=>curr+value);

            }

           

    }

  return (
    
<div className="bg-white rounded-lg w-80 p-3 shadow-2xl border-black">
    {/*display*/}
    <div className="bg-black p-2 text-right rounded-lg mb-4 ">
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