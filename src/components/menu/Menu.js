import img0 from "../imgs/mini pancakes"
import img1 from "../imgs/waffles"
import img2 from "../imgs/cakes"
import img3 from "../imgs/molten cakes"
import img4 from "../imgs/boom ice cream"
import img5 from "../imgs/cheese cake"
import '../menu/menu.css';



function Menu() {

    const imgs = ["mini pancakes", "waffles", "cakes", ]
    const imgs2 = [ "molten cakes", "boom ice cream", "cheese cake"]

    const arr = [img0, img1, img2]
    const arr2 = [img3, img4, img5]

    return < div id="menu" className="menu" >
        <h1  data-aos="fade-down" data-aos-duration="1000" style={{color: '#917c36' , paddingTop: '100px' , marginLeft: '35px'}} className="text-center text-capitalize" > our menu </h1>
        
        <div  data-aos="fade-down" data-aos-duration="1500" style={{ margin: '25px'  }} className="d-flex justify-content-center ">
            {arr.map((img, ind) => {
                return <div>
                    <div  className="card h-100" style={{width:'250px', margin: '10px' , color: '#917c36'}}>
                        <img className="card-img-top" src={img} style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title  text-center text-capitalize">{imgs[ind]}</h5>
                        </div>
                    </div>
                </div>
            })
            }
        </div>

        <div  data-aos="fade-up" data-aos-duration="1500" style={{ margin: '25px' }} className="d-flex justify-content-center ">

            {arr2.map((img, ind) => {
                return <div>
                    <div className="card h-100" style={{width:'250px', margin: '10px' ,  color: '#917c36'}}>
                        <img className="card-img-top" src={img} style={{ height: "200px" }} />
                        <div className="card-body">
                            <h5 className="card-title  text-center text-capitalize">{imgs2[ind]}</h5>
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    </div >

}
export default Menu
