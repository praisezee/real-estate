/* eslint-disable react/prop-types */
import { Button, Col, Container, FloatingLabel, FormSelect, Row } from "react-bootstrap";
import { BsGeoAlt, BsSearch } from 'react-icons/bs'


const Location = () =>{
  return(
    <div className="d-flex align-items-center">
    <BsGeoAlt className="my-autofs-5 me-1"/>
    <p className="h5 fw-bold text-capitalize my-auto">location</p>
    </div>
  )
}

const FilterSearch = ({option}) => {
  console.log(option)
  return (
    <Container className="py-1 bg-light bg-opacity-75 w-100 rounded">
      <Row className="px-2 pt-3 pb-2 g-2">
      <Col xs={4} className="my-auto rounded">
        <FloatingLabel label={<Location/>}>
          <FormSelect/>
        </FloatingLabel>
      </Col>
      <Col xs={3} className="my-auto rounded">
        <FloatingLabel label={<p className="h5 fw-bold text-capitalize my-auto">property</p>}>
          <FormSelect>
            <option value="2">property</option>
          </FormSelect>
        </FloatingLabel>
      </Col>
      <Col xs={3} className="my-auto rounded">
      <FloatingLabel label={<p className="h5 fw-bold text-capitalize my-auto">pice</p>}>
          <FormSelect>
            <option value="2">property</option>
          </FormSelect>
        </FloatingLabel>
      </Col>
      <Col xs={2} className="my-auto rounded">
        <Button variant="warning" className="d-flex mx-auto">
          <BsSearch className="my-auto"/>
          <p className="text-capitalize d-none d-md-block my-auto fw-bold  ms-1">search</p>
        </Button>
      </Col>
    </Row>
    </Container>
  )
}

export default FilterSearch
