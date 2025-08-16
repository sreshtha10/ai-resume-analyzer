import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Welcome to Resume Analyzer" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const location = useLocation();


    const navigate = useNavigate();
    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
          <Navbar></Navbar>
          <section className="main-section">
              <div className="page-heading py-16">
                  <h1>Track Your Resume Ratings</h1>
                  <h2>Review Your AI-powered Feedback</h2>
              </div>

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
          </section>

      </main>;
}
