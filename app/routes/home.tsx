import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Welcome to Resume Analyzer" },
  ];
}

export default function Home() {
      return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
          <Navbar></Navbar>
          <section className="main-section">
              <div className="page-heading">
                  <h1>Track Your Resume Ratings</h1>
                  <h2>Review Your AI-powered Feedback</h2>
              </div>
          </section>

          {resumes.length > 0 && (
              <div className="resume-section">
                  {
                      resumes.map((resume) => (
                          <div>
                              <ResumeCard key={resume.id} resume={resume}/>
                          </div>
                      ))
                  }
              </div>
          ) }

      </main>;
}
