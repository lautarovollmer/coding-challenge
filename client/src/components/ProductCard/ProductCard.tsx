import Card from "../Cards/Cards";
import "../ProductCard/ProductCard.css"

export default function ProductsCards({allProducts}: any) {
    
    return (<div className="cardContainer">
        {allProducts && 
            allProducts.map((p: any) => { 
                return <Card 
                  name={p.name}
                  description={p.description}
                  image={p.image}
                  price={p.price}
                  brand={p.brand}
                  id={p.id}
                  key={p.key}
                 /> 
            })}
    </div>
    )
}