import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X01POSLanding01 from "./components/X01POSLanding01";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|01-pos-landing-01)">
          <X01POSLanding01 {...x01POSLanding01Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const buttonPrimaryWithIconData = {
    children: "Start Free Trial",
};

const buttonPrimaryWithIcon21Data = {
    children: "Start Free Trial",
};

const text1Data = {
    saveTutors40Hour: "Save tutors 40+ hours per week per student and deliver premium personalized learning",
    ourAiAdvisorSyste: "Our AI Advisor system helps you improve your tutoring operations and elevate students’ learning experience. Daily catering of intelligent academic analysis, curated practice, insights and planning for each child is done automatically every second of the day.",
};

const elementsTextBoxNavBarData = {
    children: "Reviews",
};

const navigationBarsTitle24NoNoData = {
    elementsTextBoxNavBarProps: elementsTextBoxNavBarData,
};

const master25Data = {
    className: "master-5",
};

const ratingStarOnlyData = {
    master2Props: master25Data,
};

const elementsTextBoxTableRowData = {
    children: "1.210 reviews",
};

const elementsSpacer2Data = {
    className: "elements-spacer-1",
};

const masterData = {
    ratingStarOnlyProps: ratingStarOnlyData,
    elementsTextBoxTableRowProps: elementsTextBoxTableRowData,
    elementsSpacerProps: elementsSpacer2Data,
};

const basicData = {
    masterProps: masterData,
};

const elementsLegendTextData = {
    children: "Exellent",
};

const elementsDataLinesYData = {
    elementsLegendTextProps: elementsLegendTextData,
};

const elementsLegendText21Data = {
    children: "Very good",
};

const elementsDataLinesY21Data = {
    elementsLegendText2Props: elementsLegendText21Data,
};

const elementsLegendText22Data = {
    children: "Average",
};

const elementsDataLinesY22Data = {
    elementsLegendText2Props: elementsLegendText22Data,
};

const elementsLegendText23Data = {
    children: "Poor",
};

const elementsDataLinesY23Data = {
    elementsLegendText2Props: elementsLegendText23Data,
};

const elementsLegendText24Data = {
    children: "Terrible",
};

const elementsDataLinesY24Data = {
    elementsLegendText2Props: elementsLegendText24Data,
};

const elementsDataYData = {
    elementsDataLinesYProps: elementsDataLinesYData,
    elementsDataLinesY21Props: elementsDataLinesY21Data,
    elementsDataLinesY22Props: elementsDataLinesY22Data,
    elementsDataLinesY23Props: elementsDataLinesY23Data,
    elementsDataLinesY24Props: elementsDataLinesY24Data,
};

const text2Data = {
    saveTutors40Hour: "Increase student grades by over 70% on average without extra lessons",
    ourAiAdvisorSyste: "With our AI system, we always know when a student is behind and struggling on which exact concepts. We can directly target practice on an always adapting dynamic plan to inherently increase their grades faster. Tutors also get this data and can focus their lessons more.",
    className: "text-13",
};

const text22Data = {
    unlimitedDiagnostics: "Unlimited Diagnostics",
    weProvideUnlimited: "We provide unlimited diagnostic assessments for any student which come with a 10+ page detailed report.",
};

const text23Data = {
    unlimitedDiagnostics: "Full Question Bank",
    weProvideUnlimited: "We have over 50,000+ of premium practice sets with full solutions and explanations available to every tutor.",
    className: "text-14",
};

const text24Data = {
    unlimitedDiagnostics: "Target Scoring",
    weProvideUnlimited: "Students can provide a target score and our AI will craft the entire learning experience to hit that score fast.",
    className: "text-14",
};

const text25Data = {
    unlimitedDiagnostics: "Lesson Scheduling",
    weProvideUnlimited: "Powerful scheduling features to book sessions between tutors and students fast and easy",
    className: "text-14",
};

const text26Data = {
    unlimitedDiagnostics: "Manage Students",
    weProvideUnlimited: "Keep track of all your students and parent information. Contact students through the site anytime.",
    className: "text-14",
};

const text27Data = {
    unlimitedDiagnostics: "Group Lessons",
    weProvideUnlimited: "Ability to create and manage group classes for any students or parents.",
    className: "text-15",
};

const text28Data = {
    unlimitedDiagnostics: "Personalized Practice",
    weProvideUnlimited: "We will cater unlimited personalized practice sets to students focused on their areas of weaknesses.",
    className: "text-14",
};

const text29Data = {
    unlimitedDiagnostics: "Autograding Practice",
    weProvideUnlimited: "Students can get instant feedback on their homework and full explanations and walkthroughs for every question.",
    className: "text-14",
};

const text210Data = {
    unlimitedDiagnostics: "Heavy Tutor Insights",
    weProvideUnlimited: "We provide tutors with tons of insights that will allow them to teach more effectively for each student.",
    className: "text-14",
};

const text211Data = {
    unlimitedDiagnostics: "Video Meeting + Chat",
    weProvideUnlimited: "Powerful lesson meeting software integration with chat capability between tutors and students",
    className: "text-14",
};

const text212Data = {
    unlimitedDiagnostics: "Manage Tutors",
    weProvideUnlimited: "Manage all your tutors, onboard, track and pay all your tutors automatically with no effort.",
    className: "text-14",
};

const text213Data = {
    unlimitedDiagnostics: "Detailed Reports",
    weProvideUnlimited: "Our system will write professional daily, weekly, monthly reports for parents, students and tutors.",
    className: "text-14",
};

const text214Data = {
    unlimitedDiagnostics: "Dynamic Plan",
    weProvideUnlimited: "Our dynamic plan for each student is adapting to students every second and available to tutors and parents.",
    className: "text-14",
};

const text215Data = {
    unlimitedDiagnostics: "Question Breakdown",
    weProvideUnlimited: "Our Question Breakdown technology will intelligently break down core questions in to easier subquestions.",
    className: "text-14",
};

const text216Data = {
    unlimitedDiagnostics: "SMS & Email Reminders",
    weProvideUnlimited: "We alert students, parents and tutors through SMS & Email for upcoming sessions and chat messages",
    className: "text-14",
};

const text217Data = {
    unlimitedDiagnostics: "Auto Payment & Payroll",
    weProvideUnlimited: "Receive and track payments as well as auto pay tutors on a schedule. Full credits and subscriptions features.",
    className: "text-14",
};

const text218Data = {
    unlimitedDiagnostics: "Referral + Discounts",
    weProvideUnlimited: "Fully active referral system for parents and ability to offer discounts without extra ability.",
    className: "text-14",
};

const buttonPrimaryWithIcon32Data = {
    className: "button-primary-with-icon-4",
};

const x21Data = {
    step2CuratedDynamicPlan: "Step 1 - Diagnostic Assessment",
};

const x22Data = {
    step2CuratedDynamicPlan: "Step 2 - Curated Dynamic Plan",
    className: "x4-1",
};

const x23Data = {
    step2CuratedDynamicPlan: "Step 3 - Hyperpersonalized Practice",
    className: "x2-5",
};

const x24Data = {
    step2CuratedDynamicPlan: "Step 4 -  Advisor Grading and Feedback",
    className: "x3-3",
};

const x121Data = {
    thisSoftwareIsTr: "“This software is truly revolutionary, all my students were able to see grade increases of 15% immediately due to the extra personalized support and practice that would’ve took us hundreds of manpower hours”",
    image: "/img/image@2x.png",
    name: "Jenny Wilson",
    tutor: "Tutor",
};

const x122Data = {
    thisSoftwareIsTr: "“My child’s grades for Math immediately jumped up as soon as my child was using this. Not only does it give consistent practice, but it was like having my personal teacher and advisor watching our my child and personalizing everything”",
    image: "/img/image-1@2x.png",
    name: "Emily Hagen",
    tutor: "Parent",
    className: "x2-6",
};

const buttonPrimaryWithIcon22Data = {
    children: "Contact Us",
    className: "button-primary-with-icon-2",
};

const x01POSLanding01Data = {
    trustedByTheseOrganizationsAndMore: "Trusted by these organizations and more",
    row1: "/img/row-1.png",
    heroSection: "/img/image---shapes.png",
    group: "/img/group@2x.png",
    spanText1: "Sona",
    spanText2: "Learn",
    login: "Login",
    address: "#1 AI Powered Tutoring Software For Personalized Learning",
    weProvideEveryStu: "We provide every student with a personal academic advisor that curates daily practice (graded and walkthrough), writes daily detailed reports, creates dynamic learning plans to get each student to their target score, available to every tutor.",
    screenShot20230330At6232: "/img/screen-shot-2023-03-30-at-6-23-2.png",
    icon1: "/img/icon@2x.png",
    saveTimeWithOurS: "Save time with our system giving and grading personalized practice",
    icon2: "/img/icon-1@2x.png",
    getACuratedDynami: "Get a curated dynamic plan for a student to reach their target goal anytime",
    icon3: "/img/icon-2@2x.png",
    getAutomaticDetail: "Get automatic detailed written reports daily, weekly, monthly for each student",
    screenShot20230331At4301: "/img/screen-shot-2023-03-31-at-4-30-1@2x.png",
    icon4: "/img/icon-3@2x.png",
    wePreciselyIdentif: "We precisely identify student weakness and learnings constantly",
    icon5: "/img/icon-4@2x.png",
    withATargetScore: "With a target score, our dynamic plan is always adapting for students",
    icon6: "/img/icon-5@2x.png",
    weCaterAllOurIns: "We cater all our insights for tutors so they can know exactly how to help",
    summary_Final2: "/img/summary-final-2@2x.png",
    summary_Final1: "/img/summary-final-1.png",
    ourCoreFeaturesAn: "Our core features and technologies that we offer",
    additionalAddOns: "Additional Add-ons",
    cancellationReschedule: "Cancellation Reschedule",
    tutorsOrStudentsC: "Tutors or students can cancel or reschedule lessons whenever they want or with custom settings",
    deliverALearningE: "Deliver a learning experience worth thousands for each student",
    spanText3: "Unlimited Diagnostic Assessment ",
    spanText4: "(Worth $150)",
    spanText5: "50,000+ Practice Questions with Full Walkthroughs ",
    spanText6: "(Worth $1,000+)",
    spanText7: "Daily, Weekly, Monthly Personalized Reports ",
    spanText8: "(Worth $630/month)",
    spanText9: "Personalized Monitored Practice Sets Every Day ",
    spanText10: "(Worth $400/month)",
    spanText11: "AI Academic Advisor Curated Dynamic Plan EveryDay ",
    spanText12: "(Worth $300/month)",
    spanText13: "Guaranteed Score Increase (",
    spanText14: "Priceless",
    spanText15: ")",
    blueAndYellowSimpleSoftwareDevelopm1: "/img/blue-and-yellow-simple-software-development-gantt-graph-1@2x.png",
    handle5000TheAmo: "Handle 5000% the amount of students you currently have",
    ourSystemDoesAll: "Our system does all the hard work and giving personalized homework, identifying weaknesses, crafting plans and reports and guaranteeing grade increases for each student. So you can focus on teaching more students knowing they are under good hands.",
    givingYouAPersona: "Giving you a personal academic advisor for every student",
    focusOnHyperScali: "Focus on hyper scaling your organization and delivering a better experience",
    blueAndYellowSimpleSoftwareDevelopm2: "/img/blue-and-yellow-simple-software-development-gantt-graph--1--1.png",
    foundational5Step: "Foundational 5-Step Method to Academic Success",
    our5StepMethodEn: "Our 5-step method ensures intelligent academic success for each student without extra work.",
    step5DetailedRe: "Step 5 -  Detailed Reports for Tutors & Parents",
    iconOutlineCheveronDown2: "/img/icon-outline-cheveron-down-5@2x.png",
    blueAndYellowSimpleSoftwareDevelopm3: "/img/blue-and-yellow-simple-software-development-gantt-graph--2--1.png",
    whatOurPastParent: "What our past parents and organizations had to say",
    sonaAllowedUsTo: "“Sona allowed us to create customized plans for each student without hiring extra people. It was amazing, tutors could focus on specific weaknesses, students got extra practice, and parents got full reports on progress. Saved tens of thousands of dollars per month”",
    image: "/img/image-2@2x.png",
    name: "Tim Hardy",
    wedoEducation: "WEDO Education",
    favourite31: "/img/favourite-31@2x.png",
    overlapGroup: "/img/mask-group.png",
    getACustomizedVer: "Get a customized version built for you today",
    wePrideOurselvesI: "We pride ourselves in customizing our software to allow every organization to succeed in their own path.",
    copyright2022Al: "© Copyright 2022, All Rights Reserved by Rapid Software Technologies Inc.",
    buttonPrimaryWithIconProps: buttonPrimaryWithIconData,
    buttonPrimaryWithIcon21Props: buttonPrimaryWithIcon21Data,
    text1Props: text1Data,
    navigationBarsTitle24NoNoProps: navigationBarsTitle24NoNoData,
    basicProps: basicData,
    elementsDataYProps: elementsDataYData,
    text2Props: text2Data,
    text21Props: text22Data,
    text22Props: text23Data,
    text23Props: text24Data,
    text24Props: text25Data,
    text25Props: text26Data,
    text26Props: text27Data,
    text27Props: text28Data,
    text28Props: text29Data,
    text29Props: text210Data,
    text210Props: text211Data,
    text211Props: text212Data,
    text212Props: text213Data,
    text213Props: text214Data,
    text214Props: text215Data,
    text215Props: text216Data,
    text216Props: text217Data,
    text217Props: text218Data,
    buttonPrimaryWithIcon3Props: buttonPrimaryWithIcon32Data,
    x21Props: x21Data,
    x22Props: x22Data,
    x23Props: x23Data,
    x24Props: x24Data,
    x121Props: x121Data,
    x122Props: x122Data,
    buttonPrimaryWithIcon22Props: buttonPrimaryWithIcon22Data,
};

