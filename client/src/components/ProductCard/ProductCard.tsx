import Card from "../Cards/Cards";

export default function ProductsCards({allProducts}: any) {
    console.log(allProducts)
    return (<div>
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