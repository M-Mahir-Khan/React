import React, { useState } from 'react';

const Twelve = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{
                        padding: '10px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </div>
            {file && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Uploaded Image Preview:</h3>
                    <img
                        src={URL.createObjectURL(file)}
                        alt="uploaded"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '300px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            marginTop: '10px',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Twelve;
