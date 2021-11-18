import React from "react";
import { request } from "../helper/helper";
import { Col, Container, Row } from "react-bootstrap";
import "./empleadosbuscar.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
    {
        id: 1,
        name: "Producto 1",
        price: 1000,
    },
    {
        id: 2,
        name: "Producto 2",
        price: 2000,
    },
    {
        id: 3,
        name: "Producto 3",
        price: 3000,
    },
    {
        id: 4,
        name: "Producto 4",
        price: 4000,
    },
];
const columns = [
    {
        dataField: "id",
        text: "Product ID",
    },
    {
        dataField: "name",
        text: "Product Name",
    },
    {
        dataField: "price",
        text: "Product Price",
    },
];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        request
            .get("/empleados")
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    render() {
        const options = {
            custom: true,
            totalSize: products.length,
        };
        return (
            <Container id="empleados-buscar-container">
                <Row>
                    <h2>Buscar empleados</h2>
                </Row>
                <Row>
                    <ToolkitProvider
                        keyField="tp"
                        data={products}
                        columns={columns}
                        search
                    >
                        {(props) => (
                            <>
                                <hr />
                                <PaginationProvider
                                    pagination={paginationFactory(options)}
                                >
                                    {({
                                        paginationProps,
                                        paginationTableProps,
                                    }) => (
                                        <>
                                            <Row>
                                                <Col>
                                                    <SizePerPageDropdownStandalone
                                                        {...paginationProps}
                                                    />
                                                </Col>
                                                <Col>
                                                    <SearchBar
                                                        {...props.searchProps}
                                                    />
                                                </Col>
                                            </Row>
                                            <BootstrapTable
                                                keyField="bt"
                                                data={products}
                                                columns={columns}
                                                {...paginationTableProps}
                                                {...props.baseProps}
                                            />
                                            <PaginationListStandalone
                                                {...paginationProps}
                                            />
                                        </>
                                    )}
                                </PaginationProvider>
                            </>
                        )}
                    </ToolkitProvider>
                </Row>
            </Container>
        );
    }
}
