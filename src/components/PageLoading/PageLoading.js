import React from "react";
import { useEffect } from "react";
import "./PageLoading.css";
import { Spinner } from "react-bootstrap";

const PageLoading = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sprinnerVarients = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
    ];
    const [variant, setVariant] = React.useState("primary");
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * sprinnerVarients.length);
        setVariant(sprinnerVarients[randomIndex]);
    }, 1000);
    
    // const randomVariant = sprinnerVarients[randomIndex];

    return (
        <div className="page-loading">
            {/* <div className="loader"> */}
                <p>Loading</p>
                <Spinner animation="border" variant={variant} />
            {/* </div> */}
        </div>
    );
}
export default PageLoading;