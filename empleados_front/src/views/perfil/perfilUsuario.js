import React from "react";
import { Container } from "react-bootstrap";

export default class PerfilUsuario extends React.Component {
    render() {
        return (
            <Container style={{ marginTop: 100, marginBottom: 150 }}>
                <div class="container mt-3">
                    <div class="main-body">
                        <div class="row gutters-sm">
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                alt="Admin"
                                                class="rounded-circle"
                                                width="150"
                                            />
                                            <div class="mt-3">
                                                <h4>Usuario</h4>
                                                <p class="text-secondary mb-1">
                                                    Full Stack Developer
                                                </p>
                                                <p class="text-muted font-size-sm">
                                                    Bay Area, San Francisco, CA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-body col-md-12">
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6>Nombre</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="nombre"
                                                    placeholder="nombre"
                                                />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6>Apellidos</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="apellido"
                                                    placeholder="apellido"
                                                />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Correo</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="correo"
                                                    placeholder="example@exam.com"
                                                />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Celular</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="celular"
                                                    placeholder="000-000-0000"
                                                />
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Dirección</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    v-model="direccion"
                                                    placeholder="Cl 0 #0-0"
                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6 text-center">
                                                <button class="btn btn-primary px-4 mr-4">
                                                    Guardar Cambios
                                                </button>
                                            </div>
                                            <div class="col-sm-6 text-center">
                                                <button class="btn btn-secondary px-4">
                                                    Cancelar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
