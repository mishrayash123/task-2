import React,{useEffect,useState} from "react";
import {useLocation} from "react-router-dom";
import Axios from "axios";

const Note = () => {
    const location = useLocation();
    const [notes1,setnotes1]=useState([]);

    useEffect(() => {
        data();
    }, []);
    
    const data = async () => {
        const result = await Axios.get(`https://api.gyanibooks.com/library/get_dummy_notes/`);
        setnotes1(result.data);
    }


    return(
        <div>
       <div>
  {notes1.filter(e=>e.id.toString()==location.search.slice(1,100).toString()).map(element => ( 
     <div className="card m-5 mb-28 py-2 border-white/10  text-center bg-orange-900 dark:bg-white/10">
     <div className=" text-end m-1">
     </div>
             <div className="card-body  bg-orange-900 dark:bg-white/10 text-white font-serif italic">

                 <h5 className=" dark:text-green-500 text-bold">{
                     element.title
                 }</h5>
                 
             </div>

             <ul className="list-group list-group-flush">
                 <li className="list-group-item bg-orange-900 dark:bg-white/10 text-white font-serif italic">
                     <h6>Total User : {
                         element.notes
                     }</h6>
                 </li>
             </ul>
         </div>
     ))}
       </div>
       <div className="fixed-bottom bg-gradient-to-r from-zinc-900 via-pink-900 to-zinc-900 border border-light border  border-opacity-10 mt-5" >
       <div className="w-20 mx-auto ">
     <a className="nav-link hover:text-white" target="_blank"  href="https://github.com/mishrayash123/task"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github m-1 mx-4" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
     </div>
     <div className="mb-1">
   <h5 className=" text-center text-light mt-1 mb-1 italic ">Copyright © 2023 • Yash Kumar Mishra</h5>
     </div>
     </div>
     </div>
    );
};

export default Note;