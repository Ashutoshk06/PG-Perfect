import { useNavigate } from "react-router-dom"

const PropertyCard=({cards})=>{
    const navigate=useNavigate()
    return(

        <div onClick={()=>navigate("/showbuilding" , {state:{cards}})} className="building_card border-2 w-96 h-80 bg-blue-600 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="w-full h-[250px] overflow-hidden">
              <img className="w-full h-full object-center "
                src={cards.property_photos[0].secure_url}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-white">
              <a
                
                className="mt-[1px] text-2xl font-semibold hover:text-slate-700"
              >
                {cards.name}
              </a>
              <h4 className="font-light">{cards.ratings} </h4>
            </div>
          </div>
    )
}
export default PropertyCard