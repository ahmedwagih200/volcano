import img0 from "../imgs/mini pancakes"
import img1 from "../imgs/waffles"
import img2 from "../imgs/cakes"
import img3 from "../imgs/molten cakes"
import img4 from "../imgs/boom ice cream"
import img5 from "../imgs/cheese cake"


function Menu (){
        
    const  imgs =["mini pancakes" , "waffles" , "cakes" , "molten cakes", "boom ice cream" ,"cheese cake"  ]


  const  arr=[ img0 , img1 ,img2 , img3 , img4 , img5 ]

  
    
   return <div className="container mt-5">
       <h1 className="text-center text-capitalize" > our menu </h1>
    <div className="row mx-5">
        
    
       {
           arr.map(( img , ind  )=>{
      
       return <div className="col-lg-3 col-md-4 col-sm-6 my-4 ">
              <div className=" card h-100">
                    <img className="card-img-top" src={ img } style={{height:"250px" }}/>
                    <div className="card-body">
                        <h5 className="card-title  text-center text-capitalize">{ imgs[ind] }</h5>

                    </div>

                </div>


            </div> 
          
        })
       }


        </div>
            </div>
            

   
}

export default Menu