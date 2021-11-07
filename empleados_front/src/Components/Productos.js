import React from "react";
import { Image } from "react-bootstrap";

const Productos = () => {
    return (
        <div class="container">
            <h1 class="my-5">Productos </h1>
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC7lyYHtoZdlzCuD768OTDiQbUTq_43JxWQ&usqp=CAU"
                                rounded
                            />
                            {/* <ul class="social">
                                <li>
                                    <a href="none" data-tip="Especificaciones">
                                        <i class="fa fa-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="none"
                                        data-tip="Añadir a la lista de deseos"
                                    >
                                        <i class="fa fa-shopping-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="none" data-tip="Añadir al carrito">
                                        <i class="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul> */}
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">20%</span>
                        </div>
                        {/* <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star disable"></li>
                        </ul> */}
                        <div class="product-content">
                            <h3 class="title">
                                <a href="none">Pc Gamer</a>
                            </h3>
                            <div class="price">
                                $16.00
                                <span>$20.00</span>
                            </div>
                            <a class="add-to-cart" href="none">
                                + Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="none">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9KXiW0tZZdVov6PX9IdrtqE6zXjyAXmVPsA&usqp=CAU"
                                    rounded
                                />
                            </a>
                            {/* <ul class="social">
                                <li>
                                    <a href="none" data-tip="Especificaciones">
                                        <i class="fa fa-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="none"
                                        data-tip="Añadir a la lista de deseos"
                                    >
                                        <i class="fa fa-shopping-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="none" data-tip="Añadir al carrito">
                                        <i class="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul> */}
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        {/* <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul> */}
                        <div class="product-content">
                            <h3 class="title">
                                <a href="none">Camiseta Nike</a>
                            </h3>
                            <div class="price">
                                $5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="none">
                                + Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="none">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoon5H1DZu8LXyG7aMjG7A5i1u8_4zGPKElA&usqp=CAU"
                                    rounded
                                />
                            </a>
                            {/* <ul class="social">
                                <li>
                                    <a href="none" data-tip="Especificaciones">
                                        <i class="fa fa-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="none"
                                        data-tip="Añadir a la lista de deseos"
                                    >
                                        <i class="fa fa-shopping-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="none" data-tip="Añadir al carrito">
                                        <i class="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul> */}
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        {/* <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul> */}
                        <div class="product-content">
                            <h3 class="title">
                                <a href="none">Zapatillas Nike</a>
                            </h3>
                            <div class="price">
                                $5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="none">
                                + Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="none">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIf9wG6spbY7V1-a1X-QD2J2dNxmHFITjNg&usqp=CAU"
                                    rounded
                                />
                            </a>
                            {/* <ul class="social">
                                <li>
                                    <a
                                        href="product-details.html"
                                        data-tip="Especificaciones"
                                    >
                                        <i class="fa fa-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="none"
                                        data-tip="Añadir a la lista de deseos"
                                    >
                                        <i class="fa fa-shopping-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="none" data-tip="Añadir al carrito">
                                        <i class="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul> */}
                            <span class="product-new-label">Sale</span>
                            <span class="product-discount-label">50%</span>
                        </div>
                        {/* <ul class="rating">
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                            <li class="fa fa-star"></li>
                        </ul> */}
                        <div class="product-content">
                            <h3 class="title">
                                <a href="none">Silla Gamer</a>
                            </h3>
                            <div class="price">
                                $5.00
                                <span>$10.00</span>
                            </div>
                            <a class="add-to-cart" href="none">
                                + Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productos;
