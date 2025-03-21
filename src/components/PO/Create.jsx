import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import jdArray from "../Students/MyData";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    // Making usestate for setting and fetching a value in jsx
    const [cname, setcname] = useState("");
    const [category, setcategory] = useState("");
    const [jdate, setjdate] = useState("");
    const [domain, setdomain] = useState("");
    const [pkg, setpkg] = useState("");
    const [experience, setexperience] = useState("");

    // Using useNavigate for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (event) => {
        event.preventDefault(); // Prevent reload

        const ids = uuid(); // Creating unique id
        let uni = ids.slice(0, 8); // Slicing unique id

        // Fetching a value from usestate and pushing to javascript object
        let a = cname,
            b = category,
            c = jdate,
            d = domain,
            e = pkg,
            f = experience;
        if (cname === "" || category === "" || jdate === "" || domain === "" || pkg === "" || experience === "") {
            alert("invalid input");
            return;
        }
        jdArray.push({ id: uni, CompanyName: a, CompanyCategory: b, JDdate: c, Domain: d, Package: e, Experience: f });

        // Redirecting to home page after creation done
        history("/");
    };

    return (
        <div>
            <h2 class="heading">Enter an Data</h2>
            <Form className="d-grid gap-2" style={{ margin: "5rem" }}>
                {/* Fetching a value from input text field in a setname using usestate */}
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        onChange={(e) => setcname(e.target.value)}
                        type="text"
                        placeholder="Enter Company Name"
                        required
                    />
                </Form.Group>

                {/* Fetching a value from input text field in a setcategory using usestate */}
                <Form.Group className="mb-3" controlId="formBasicCategory">
                    <Form.Control
                        onChange={(e) => setcategory(e.target.value)}
                        type="text"
                        placeholder="Enter Category"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Control
                        onChange={(e) => setjdate(e.target.value)}
                        type="date"
                        placeholder="Select Date"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDomain">
                    <Form.Control
                        onChange={(e) => setdomain(e.target.value)}
                        type="text"
                        placeholder="Enter Domain"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPackage">
                    <Form.Control
                        onChange={(e) => setpkg(e.target.value)}
                        type="text"
                        placeholder="Enter Package"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicExperience">
                    <Form.Control
                        onChange={(e) => setexperience(e.target.value)}
                        type="text"
                        placeholder="Enter Experience"
                        required
                    />
                </Form.Group>

                {/* Handling a onclick event in button for firing a function */}
                <Button onClick={(event) => handelSubmit(event)} variant="secondary" type="submit">
                    Submit
                </Button>

                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="danger" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;