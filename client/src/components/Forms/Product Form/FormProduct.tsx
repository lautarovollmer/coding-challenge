import { useState, useRef, useEffect } from "react";

export function FormProduct() {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        image_url: "",
        price: 0,
        brand: {
          name: "",
          logo_url: "",
        },
      });

      setProduct({
        id: "",
        name: "",
        description: "",
        image_url: "",
        price: 0,
        brand: {
          name: "",
          logo_url: "",
        },
      });

      
    
}