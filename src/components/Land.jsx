import React, { useState } from "react";
import jdArray from "./Students/MyData";
import "../App.css";
   

function Home() {
    const [data, setData] = useState(jdArray);
    const [editItem, setEditItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        CompanyName: "",
        CompanyCategory: "",
        JDdate: "",
        Domain: ""
    });

    function setId(id, CompanyName, CompanyCategory, JDdate, Domain) {
        localStorage.setItem("id", id);
        localStorage.setItem("CompanyName", CompanyName);
        localStorage.setItem("CompanyCategory", CompanyCategory);
        localStorage.setItem("JDdate", JDdate);
        localStorage.setItem("Domain", Domain);
    }

    function deleted(id, e) {
        e.stopPropagation();
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    }

    function handleEditClick(item, e) {
        e.stopPropagation();
        setEditItem(item);
        setFormData(item);
        setShowModal(true);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSave() {
        const updatedData = data.map((item) =>
            item.id === formData.id ? formData : item
        );
        setData(updatedData);
        setShowModal(false);
    }

    return (
        <div style={{ margin: "2rem" }} >
            <h1 className="text-center" style={{color:'red',fontWeight:500}}>Company Data</h1>
            <table >
                <thead>
                    <tr className="heading">
                        <th >Company Name</th>
                        <th>Category</th>
                        <th>Job Date</th>
                        <th>Domain</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} onClick={() => setId(item.id, item.CompanyName, item.CompanyCategory, item.JDdate, item.Domain)}>
                            <td>{item.CompanyName}</td>
                            <td>{item.CompanyCategory}</td>
                            <td>{item.JDdate instanceof Date ? item.JDdate.toLocaleDateString() : item.JDdate}</td>
                            <td>{item.Domain}</td>
                            <td>
                                <button onClick={(e) => handleEditClick(item, e)}>Edit</button>
                                <button onClick={(e) => deleted(item.id, e)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <div>
                    <div>
                        <h2 class="heading">Edit Company Data</h2>
                        <label>Company Name:</label>
                        <input type="text" name="CompanyName" value={formData.CompanyName} onChange={handleChange} />
                        <label>Category:</label>
                        <input type="text" name="CompanyCategory" value={formData.CompanyCategory} onChange={handleChange} />
                        <label>Job Date:</label>
                        <input type="text" name="JDdate" value={formData.JDdate} onChange={handleChange} />
                        <label>Domain:</label>
                        <input type="text" name="Domain" value={formData.Domain} onChange={handleChange} />

                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
