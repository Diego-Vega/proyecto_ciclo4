import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../../helper/helper";
import DataGrid from "../../grid/Grid";
import ConfirmationPrompts from "../../prompts/confirmation";
import Loading from "../../loading/Loading";
import MessagePrompt from "../../prompts/message";

const columns = [
    {
        dataField: "_id",
        text: "ID",
        hidden: true,
    },
    {
        dataField: "nombre",
        text: "Nombre",
    },
    {
        dataField: "precio",
        text: "Precio",
    },
    {
        dataField: "especificacion",
        text: "Especificacion",
    },
    // {
    //     dataField: "foto",
    //     text: "Foto",
    // },
];
export default class ProductosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                text: "",
                show: false,
            },
            loading: false,
            idProducto: null,
            confirmation: {
                title: "Eliminar Producto",
                text: "¿Deseas eliminar el producto?",
                show: false,
            },
        };
        this.onClickEditButton = this.onClickEditButton.bind(this);
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    onClickEditButton(row) {
        this.props.setIdProducto(row._id);
        this.props.changeTab("Editar");
    }
    onClickDeleteButton(row) {
        this.setState({
            idProducto: row._id,
            confirmation: {
                ...this.state.confirmation,
                show: true,
            },
        });
    }
    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }
    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.eliminarProducto(),
        );
    }
    eliminarProducto() {
        this.setState({ loading: true });
        request
            .delete(`/productos/${this.state.idProducto}`)
            .then((response) => {
                this.setState({
                    message: {
                        text: response.data.msg,
                        show: true,
                    },
                });
                if (response.data.exito) this.reloadPage();
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }
    reloadPage() {
        setTimeout(() => {
            window.location.reload();
        }, 2500);
    }
    render() {
        return (
            <Container id="productos-buscar-container">
                <ConfirmationPrompts
                    text={this.state.confirmation.text}
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h2>Buscar Productos</h2>
                </Row>
                <Row>
                    <DataGrid
                        url="/productos"
                        columns={columns}
                        showEditButton={true}
                        showDeleteButton={true}
                        onClickEditButton={this.onClickEditButton}
                        onClickDeleteButton={this.onClickDeleteButton}
                    />
                </Row>
            </Container>
        );
    }
}
