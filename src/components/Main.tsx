import React, {useState, useEffect} from 'react'

type resultProps = {
    name: string;
    price: number;
    description: string;
    available: boolean;
}

const main = () => {

const [result, setResult] = useState<resultProps[]>([])

    useEffect(() => {
      
        const api= async () => {
            const data = await fetch("", {
                method: "GET"
            });
            const json = await data.json();
            setResult(json.result)
        }
    
        api()
    }, [])
    

  return (
    <div>main</div>
  )
}

export default main