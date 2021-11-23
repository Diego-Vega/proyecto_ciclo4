import React from "react";
import { Col, Row } from "react-bootstrap";
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

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const options = {
            custom: true,
            totalSize: products.length,
        };
        return (
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
                            {({ paginationProps, paginationTableProps }) => (
                                <>
                                    <Row>
                                        <Col>
                                            <SizePerPageDropdownStandalone
                                                {...paginationProps}
                                            />
                                        </Col>
                                        <Col>
                                            <SearchBar {...props.searchProps} />
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
        );
    }
}
