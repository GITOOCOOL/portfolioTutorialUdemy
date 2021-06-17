import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageUrl}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >

                </div>
            </Link>

            <div className="p-3">
                <Link to={`/products/${props.product.id}`}>
                    <h1 className="text-2xl font-bold mb-3">
                        {props.product.name}
                    </h1> 
                </Link>
                <div className="font-bold text-xl mb-3">
                    $ {props.product.price}
                </div>
                <Link 
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </Link>
            </div>

        </div>
    )
}

export default ProductCard
