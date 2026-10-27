import Link from 'next/link';
import StickyBackArrow from '@/components/StickyBackArrow';

export default function Project2Page() {
  return (
    <main className="page-content cs-page">

      <StickyBackArrow />

      <div className="cs-inner">

        {/* Title */}
        <h1 className="cs-title">SCADride</h1>

        {/* Hero image */}
        <img
          src="/case-studies/project-2/1.png"
          alt="SCADride hero"
          className="cs-hero-img"
        />

        <hr className="cs-divider" />

        {/* Brief + Roles */}
        <div className="cs-brief-row">
          <div className="cs-brief-col">
            <p className="cs-label">The Brief</p>
            <p className="cs-body">Create a new product for SCAD that is geared towards helping students.</p>
            <p className="cs-body" style={{ fontStyle: 'italic', marginTop: '6px' }}>*this is a conceptual project</p>
          </div>
          <div className="cs-roles-col">
            <p className="cs-label">My Roles</p>
            <p className="cs-body">Project Manager</p>
            <p className="cs-body">UX/UI Designer</p>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* Problem statement */}
        <div className="cs-two-col">
          <img
            src="/case-studies/project-2/2.png"
            alt="SCAD campus navigation"
            className="cs-col-img"
          />
          <div>
            <p className="cs-label">The Problem</p>
            <p className="cs-body cs-body--lg">
              SCAD students find a lot of <strong>issues</strong> with{' '}
              <strong>navigating  campus</strong>, as well as getting to places
              off campus when they <strong>don&apos;t have a vehicle</strong>. SCAD
              has a great transit system but the buses{' '}
              <strong>aren&apos;t reliable</strong> or doesn&apos;t have stops where students
              need to be. This leads to students <strong>missing classes</strong>,
              events, and sometimes not being able to get required materials.
            </p>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* How might we */}
        <div className="cs-two-col cs-two-col--reverse">
          <div className="cs-hmw">
            <p className="cs-label">How might we...</p>
            <ol className="cs-numbered">
              <li>
                <span className="cs-num">01.</span>
                <span>Provide more ways for students to get to places they need to be?</span>
              </li>
              <li>
                <span className="cs-num">02.</span>
                <span>Create opportunities for students to be more involved in this process?</span>
              </li>
              <li>
                <span className="cs-num">03.</span>
                <span>Keep everyone involved in the process safe?</span>
              </li>
            </ol>
          </div>
          <img
            src="/case-studies/project-2/3.png"
            alt="How might we research"
            className="cs-col-img"
          />
        </div>

        <hr className="cs-divider" />

        {/* Main Goals */}
        <div className="cs-goals-section">
          <p className="cs-label">Main Goals</p>
          <div className="cs-goals-grid cs-goals-grid--2col">
            <div className="cs-goal">
              <p className="cs-goal-title">Prioritize Student Safety</p>
              <p className="cs-body">It&apos;s a lot safer to get in a car with a fellow student than it is with a random stranger in Savannah. We wanted to come up with a solution to make getting around campus and Savannah while also ensuring all student safety in the process.</p>
            </div>
            <div className="cs-goal">
              <p className="cs-goal-title">Prevent Program Abuse</p>
              <p className="cs-body">There should be checks and balances in place so that students aren&apos;t able to abuse the system. For example if someone posted a ride and all of their friends booked it then it&apos;s practically equivalent to free money.</p>
            </div>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* Research */}
        <div className="cs-two-col">
          <img
            src="/case-studies/project-2/4.png"
            alt="Student survey research"
            className="cs-col-img"
          />
          <div>
            <p className="cs-label">Research</p>
            <p className="cs-body">
              My team and I created a survey for SCAD students and asked them about the reliability of the current SCAD transportation systems. We wanted to know their satisfaction and what options they’d consider. As an added caveat, if students were to utilize our program, we asked whether or not they’d understand the need to sign a liability waiver and if they would do so.
            </p>
          </div>
        </div>

        {/* Full-width research image */}
        <img
          src="/case-studies/project-2/5.png"
          alt="Research findings"
          className="cs-full-img cs-full-img--gap"
        />

        <hr className="cs-divider" />

        {/* Informed Lessons */}
        <p className="cs-label">Informed Decisions</p>
        <ol className="cs-informed">
          <li>
            <span className="cs-num">01.</span>
            <p className="cs-body">We know it’s important to be able to identify vehicles and drivers, so students should include a profile photo with their account. An image of their vehicle would be loaded in once students input it into the system. However while identification is important, privacy is as well. Students getting rides are not able to see license plates or their drivers last name. It’s important for students to know their drivers, but it’s also important for the drivers to feel safe utilizing this program as well.</p>
          </li>
          <li>
            <span className="cs-num">02.</span>
            <p className="cs-body">The application is streamlined with the ability to search for student rides, to book a ride on a SCAD Volkswagen bus, view booked rides, and student's profile. Finding a ride to places is hard enough as is, using a simple tool will make that process faster.</p>
          </li>
          <li>
            <span className="cs-num">03.</span>
            <p className="cs-body">To prevent an abuse of power, students who are drivers with the program must complete a driving course and test with SCAD before being hired. Considering this is also a student employment opportunity, drivers would be allotted payment either to their student account in the form of Dining Dollars, or a provided gas card where they're compensated a certain cent value for every mile they drive on a trip.</p>
          </li>
        </ol>

        <hr className="cs-divider" />

        {/* Final design image */}
        <img
          src="/case-studies/project-2/6.png"
          alt="SCADride final design screens"
          className="cs-full-img"
        />

        {/* Conclusion */}
        <p className="cs-body cs-conclusion">
          SCADride gives student a new way to get around. It’s a process of certifying students and creating a new level of trust within the community at SCAD. While this is a conceptual project, we do realize there are many places for improvement, such as putting in better legal restrictions, or creating encryptions and levels of verification in order to use the application. A huge goal of SCAD is to keep all of their students safe. The care and attention given to all SCAD facilities would encompass this idea as well. SCADride is a way for students to be more involved at SCAD and with each other. There are more ways to get around.
        </p>

        {/* Return button */}
        <div className="cs-return">
          <Link href="/work" className="btn">return</Link>
        </div>

      </div>
    </main>
  );
}
