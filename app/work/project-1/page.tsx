import Link from 'next/link';
import StickyBackArrow from '@/components/StickyBackArrow';

export default function Project1Page() {
  return (
    <main className="page-content cs-page">

      {/* Sticky back arrow — fixed, fades when return button is in view */}
      <StickyBackArrow />

      <div className="cs-inner">

        {/* Title */}
        <h1 className="cs-title">Flora &amp; Fauna: Reimagined</h1>

        {/* Hero image */}
        <img
          src="/case-studies/project-1/1.png"
          alt="Flora & Fauna: Reimagined hero"
          className="cs-hero-img"
        />

        <hr className="cs-divider" />

        {/* Brief + Roles */}
        <div className="cs-brief-row">
          <div className="cs-brief-col">
            <p className="cs-label">The Brief</p>
            <p className="cs-body">Select a local coffeeshop and refresh/reimagine their web experience.</p>
          </div>
          <div className="cs-roles-col">
            <p className="cs-label">My Roles</p>
            <p className="cs-body">Project Manager</p>
            <p className="cs-body">Interactive Design</p>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* Problem statement */}
        <div className="cs-two-col">
          <img
            src="/case-studies/project-1/2.png"
            alt="Flora & Fauna existing website"
            className="cs-col-img"
          />
          <div>
            <p className="cs-label">The Problem</p>
              <p className="cs-body cs-body--lg">
              When visiting the Flora and Fauna website, patrons might become{' '}
              <strong>confused</strong> while attempting to{' '}
              <strong>navigate the site</strong>. This could be due to the{' '}
              <strong>disorganized</strong> and <strong>impersonal</strong> web
              experience. Visiting the website may <strong>deter new patrons</strong>{' '}
              from visiting the cafe, costing Flora and Fauna business in the long run.
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
                <span>Better cater to the demographic and needs of our users?</span>
              </li>
              <li>
                <span className="cs-num">02.</span>
                <span>Identify specific elements that Flora &amp; Fauna is lacking compared to other restaurants and cafes?</span>
              </li>
              <li>
                <span className="cs-num">03.</span>
                <span>Better reflect the company&apos;s mission/values?</span>
              </li>
            </ol>
          </div>
          <img
            src="/case-studies/project-1/3.png"
            alt="Research insights"
            className="cs-col-img"
          />
        </div>

        <hr className="cs-divider" />

        {/* Main Goals */}
        <div className="cs-goals-section">
          <p className="cs-label">Main Goals</p>
          <div className="cs-goals-grid">
            <div className="cs-goal">
              <p className="cs-goal-title">Restructure existing IA</p>
              <p className="cs-body">Originally the navigation wasn’t intuitively labelled, and outside links acted as subpages rather than denoting they’d take you away from the website.</p>
            </div>
            <div className="cs-goal">
              <p className="cs-goal-title">Refine the brand</p>
              <p className="cs-body">Expand the color palette and font styles to be more user friendly and accessible.</p>
            </div>
            <div className="cs-goal">
              <p className="cs-goal-title">Create better access</p>
              <p className="cs-body">Lots of information that you’d expect from a cafe website was missing and some information was difficult to find.</p>
            </div>
          </div>
        </div>

        <hr className="cs-divider" />

        {/* Research */}
        <div className="cs-two-col">
          <img
            src="/case-studies/project-1/4.png"
            alt="Card sorting exercise"
            className="cs-col-img"
          />
          <div>
            <p className="cs-label">Research</p>
            <p className="cs-body">
              My team and I ran a card sorting exercise in order to understand how users organized site information. From there we reworked the sites IA and introduced the “Ordering & More” category so that some outlying links had a new home.
            </p>
            <p className="cs-body">
              We also tested the sites color palette against WCAG standards. We added more colors and decreased some of the sites saturation. This made text more legible and readily available for users.
            </p>
          </div>
        </div>

        {/* Image pair */}
        <div className="cs-img-pair">
          <img src="/case-studies/project-1/5.png" alt="Color palette explorations" className="cs-pair-img" />
          <img src="/case-studies/project-1/6.png" alt="IA restructure" className="cs-pair-img" />
        </div>

        <hr className="cs-divider" />

        {/* Informed Decisions */}
        <p className="cs-label">Informed Decisions</p>
        <ol className="cs-informed">
          <li>
            <span className="cs-num">01.</span>
            <p className="cs-body">Restructuring the information architecture of the Flora & Fauna website makes it much easier to navigate and understand. We used our research, primarily our card sorting exercise, to support how we reorganized the navigation bar. As well as renamed elements to be more reflective of their contents. Overall, the restructured IA provides a more intuitive and impactful interface for users.</p>
          </li>
          <li>
            <span className="cs-num">02.</span>
            <p className="cs-body">Originally, navigation was not clearly labelled and caused confusion. Flora & Fauna: Reimagined took this into account and reduced cognitive load with clearer categories and navigation structures. Organizing pages into more condensed yet intuitive sections, as well as reducing some pages to a singular one aided in this.</p>
          </li>
          <li>
            <span className="cs-num">03.</span>
            <p className="cs-body">Initially, Flora & Fauna’s website consisted of a lot of low contrast colors and scarce interaction functions. After testing their iconic color palette against WCAG accessibility standards, we decided to tweak hues to increase readability. We also created more effective feedback channels through clear hover effects, including  buttons changing color and photos enlarging so you are aware they are not only selectable, but also that you are going to select it.</p>
          </li>
        </ol>

        <hr className="cs-divider" />

        {/* Image 7 */}
        <img
          src="/case-studies/project-1/7.png"
          alt="Final design screens"
          className="cs-full-img"
        />

        {/* Conclusion */}
        <p className="cs-body cs-conclusion">
          Flora & Fauna: Reimagined streamlines the user experience for what customers want to know. Emphasizing the cafe experience where users can quickly see and access reservations, menu items, the Flora & Fauna story, and online ordering. Reducing confusion each are named appropriately, and if customers are left with questions, contacting the restaurant is made easy by providing organized information in the footer, as commonly used. Reviving this beloved Savannah cafe not only makes frequent patrons feel more appreciated, but also opens up the doors to so many new faces.
        </p>

        {/* Return button */}
        <div className="cs-return">
          <Link href="/work" className="btn">return</Link>
        </div>

      </div>
    </main>
  );
}
