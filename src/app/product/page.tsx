import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

const Product = () => {
    const productList: any[] = [
        {
            name: "IPhone 13 pro Max",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Electronics",
            id: "6f17"
        },
        {
            name: "T-Shirt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Clothing",
            id: "9493"
        },
        {
            name: "Dress Pant",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Clothing",
            id: "1d93"
        },
        {
            name: "Blue Jeans",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Clothing",
            id: "61ca"
        },
        {
            name: "Computer Engineer",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Books",
            id: "b5e6"
        },
        {
            name: "Web Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Books",
            id: "512f"
        },
        {
            name: "Casual Shoes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Others",
            id: "951f"
        },
        {
            name: "Loffars",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Others",
            id: "eca3"
        },
        {
            id: "2161",
            name: "Oven",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?\t",
            category: "Electronics"
        },
        {
            id: "3bec",
            name: "Mutton Qeema",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolores?",
            category: "Other"
        }
    ]
    return (
        <div className="container">
            <div className="row mt-4 mb-4 py-4">
                {
                    productList.map((product: any) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="card mb-3">
                                    <div className="card-header">
                                        <div className="card-title text-primary">
                                            <h4>{product.name}</h4></div>
                                        <small>{product.category}</small>
                                    </div>
                                    <div className="card-body">
                                        {product.description}
                                    </div>
                                    <div className="card-footer">
                                        <Link href={`/product/${product.id}`}>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
        // <Container>
        //     <Row className='mt-4 mb-4 py-4'>
        //         <Col>
        //             <ul>
        //                 <li><Link href='/product/1011'>Omama Aslam</Link></li>
        //                 <li><Link href='/product/1012'>Usman Khalid</Link></li>
        //                 <li><Link href='/product/1013'>Zeeshan khan</Link></li>
        //                 <li><Link href='/product/1014'>Abubaker Saddique</Link></li>
        //             </ul>
        //         </Col>
        //     </Row>
        // </Container>
    );
}
export default Product;