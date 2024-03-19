import { createContext,useContext,useState } from "react";



const Appcontext=createContext()


const Appprovider=({children})=>{
    let update='none'



            const test=()=>{
                console.log('hello');
            }
            const [name,setname]=useState('Alan')
            const [phone,setphone]=useState('123456789')


            const changename=(arg)=>{
                setname(arg)
            }
            const changephone=(arg)=>{
                setphone(arg)
            }

    return <Appcontext.Provider value={{test,update,name,phone,changename,changephone}}>{children}</Appcontext.Provider>




}


const useGlobalContext=()=>{


    return useContext(Appcontext)
}

export {useGlobalContext,Appprovider}