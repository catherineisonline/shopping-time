import { useEffect } from "react";
import "./not-found.css";
const NotFound = () => {
    useEffect(() => {
        document.title = "404 | Shopping Time";
    }, []);
    return (
        <main className="not-found">
            <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTJsYm1sYjJpbnNzdmpxb3g2eGNvdXB5ZDhwbHlmZjY1cTlpbnh1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/gKH0yJ21ia3chGqPxu/giphy.gif"
                alt=""
                aria-hidden="true"
            />
            <h2>This page is not available</h2>
            <p>Sorry, we couldn’t find the page you’re looking for.
            </p>
        </main>
    )
}

export default NotFound;