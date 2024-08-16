import React from "react";
import "./download.css"; 

function Download() {
    return (
        <section className="download-section">
            <div className="download-content">
                <h1>Download My CV</h1>
                <p>Click the button below to download a PDF of my updated CV.</p>
                <a
                    href="/Software Developer.pdf"
                    download="Collins_Kipngeno_CV.pdf"
                    className="download-button"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default Download;
