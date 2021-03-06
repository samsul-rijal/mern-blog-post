import React from 'react'
import { Card } from 'react-bootstrap'

function ListBlog(props) {
    return (
        <div>
            <Card style={{ width: '15rem' }} className='shadow-sm mb-4 bg-body rounded'>
                <Card.Img variant="top" src="https://camo.githubusercontent.com/31ff8df235ece3324517d44a28df0b36abcb73a1f6d9b8fb9f5175839f7565d3/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f70726163746963616c6465762f696d6167652f66657463682f732d2d3046524a4764795a2d2d2f635f696d616767615f7363616c652c665f6175746f2c666c5f70726f67726573736976652c685f3530302c715f6175746f2c775f313030302f68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f75706c6f6164732f61727469636c65732f65707635356867747366693863737072706a39752e6a7067" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ListBlog