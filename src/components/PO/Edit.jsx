import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import jdArray from "../Students/MyData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
    // Here usestate has been used in order
    // to set and get values from the jsx
    const [cname, setcname] = useState("");
    const [category, setcategory] = useState("");
    const [jdate, setjdate] = useState("");
    const [domain, setdomain] = useState("");
    const [id, setid] = useState("");
    // Used for navigation with logic in javascript
    let history = useNavigate();

    // Getting an index of an entry with an id
    let index = jdArray
        .map(function (e) {
            return e.id;
        })
        .indexOf(id);

    // Function for handling the edit and
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        // Preventing from reload
        e.preventDefault();
        if (cname === "" || category === ""|| jdate === ""|| domain === "") {
                  alert("invalid input");
            return;
        }

        // // Getting an index of an array
        jdArray[index] = {
            id,
            CompanyName: cname,
            CompanyCategory: category,
            JDdate: jdate,
            Domain: domain
        };


        // Redirecting to main page
        history("/");
    };

    // Useeffect take care that page will
    // be rendered only once
    useEffect(() => {
        setcname(localStorage.getItem("CompanyName") || "");
        setcategory(localStorage.getItem("CompanyCategory") || "");
        // setjdate(localStorage.getItem("JDdate") || "");
        const storedDate = localStorage.getItem("JDdate");
    setjdate(storedDate ? new Date(storedDate).toISOString().split("T")[0] : "");
        setdomain(localStorage.getItem("Domain") || "");
        setid(localStorage.getItem("id") || "");
    }, []);

    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* setting a name from the
                    input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        value={cname}
                        onChange={(e) =>
                            setcname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />
                </Form.Group>

                {/* setting a category from the input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicCategory"
                >
                    <Form.Control
                        value={category}
                        onChange={(e) =>
                            setcategory(e.target.value)
                        }
                        type="text"
                        placeholder="category"
                    />
                </Form.Group>
<Form.Group
                    className="mb-3"
                    controlId="formBasicDate"
                >
                    <Form.Control
    value={jdate}
    onChange={(e) => setjdate(e.target.value)}
    type="date"
    placeholder="Select Date"
    required
/>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicDomain"
                >
                    <Form.Control
    value={domain}
    onChange={(e) => setdomain(e.target.value)}
    type="text"
    placeholder="Enter Domain"
    required
/>
                </Form.Group>
                {/* Hadinling an onclick event
                    running an edit logic */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>

                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Edit;