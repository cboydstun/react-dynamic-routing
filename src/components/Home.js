import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Welcome home!</h1>
            <h2>Type of coffees:</h2>
            <ul>
                <li>
                <Link to={"/coffee/hot"}>Hot Coffees</Link>
                </li>
                <li>
                <Link to={"/coffee/iced"}>Cold coffees</Link>
                </li>
            </ul>
        </div>
    );
}
