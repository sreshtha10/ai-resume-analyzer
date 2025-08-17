import React, {type FormEvent} from "react";
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";

const Upload = () => {

    const [isProcessing, setIsProcessing] = React.useState(false);
    const [statusText, setStatusText] = React.useState("");
    const [file, setFile] = React.useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file);
    }

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {

    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar></Navbar>
            <section className="main-section">
                <div className="page-heading py-16">
                    <h1>Smart Feedback for your dream job</h1>
                    {
                        isProcessing ? (<>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan-2.gif" className="w-full"/>
                        </>): (<h2>Drop your Resume for an ATS score and feedback</h2>)
                    }

                    {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" placeholder="Company Name" id="company-name"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" placeholder="Company Name" id="company-name"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={5} name="job-description" placeholder="Job Description" id="job-description"/>
                            </div>
                            <div className="form-div">
                                <label htmlFor="uploader">Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div>

                            <button type="submit" className="primary-button">Analyze Resume</button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}


export default Upload;