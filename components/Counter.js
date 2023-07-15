import { useState } from "react";

const COunter = () =>{
    const [counting,setCounting]=useState(0)
    const onIncreamentHandler = () =>{
        setCounting(counting+5)
    }
    const onDescreamentHandler =  () =>{
        
    if(counting - 3<=0){
        setCounting(0)
        
    }
    else{
        setCounting(counting-3)
    }
   
    }

    return(

        <div>
            <div className="card">
  <div class="card-body">
  <h3 className="text-center">{counting}</h3>

  <div className="text-center pt-5">
  <button type="button" className="btn btn-primary" onClick={onIncreamentHandler}>increament</button>
  <button type="button" className="btn btn-success" onClick={onDescreamentHandler}>decreament</button>
  </div>
  </div>
</div>


        </div>
    )
}
export default COunter;