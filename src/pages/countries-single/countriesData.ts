import one from "./assets/images/1.png";
import two from "./assets/images/2.jpg";
import three from "./assets/images/3.jpg";
import four from "./assets/images/4.jpg";
import five from "./assets/images/5.jpg";
import six from "./assets/images/6.jpg";
import seven from "./assets/images/7.jpg";
import eight from "./assets/images/8.jpg";
import nine from "./assets/images/9.jpg";
import ten from "./assets/images/10.jpg";
import eleven from "./assets/images/11.jpg";
import twelve from "./assets/images/12.jpg";
import thert from "./assets/images/13.jpg";
import fourteen from "./assets/images/14.jpg";
import fifteen from "./assets/images/fifteen.jpg";

// countriesData.ts
interface CountryData {
  country_title: string;
  description: string;
  steps: string[];
  requirements: string[];
  questions?: string;
  answer?: string[];
  collapseItems?: any[];
  universities?: any[];
}

const countriesData: { [key: string]: CountryData } = {
  Russia: {
    country_title:
      "Russia is a fine place for students who would love to pursue MBBS. It’s well-being and quality of life attracts the students. The course duration in Russia is 5.8 years. MBBS in Russia is considered as the best option for the students who want to study abroad. The reason it is considered as the best option is the advantage of getting high-quality education at an affordable cost. Russia med­ ical universities are recognized by MCI, WHO, UNESCO, etc. Students are keen to take admission in Russia, because of the Russian service and the students who get mbbs admission in Russia are praiseworthy. Doing MBBS in Russia is a great opportunity for the students. The Russian universities occupy the top 30 in the ranking.",
    questions: "Why Study MBBS in ",
    answer: [
      "The quality of education is very affordable and advanced.",
      "Russian degree is globally recognized; therefore, students can practice wherever they wish.",
      "The course is recognized by relevant authorities.",
      "Students get good and furnished accommodation inside the campus.",
      "The students who are from India feel at home because of the Indian mess in the universities.",
      "The subsidy is 70% for the MBBS courses in Russian Universities. The average MBBS fee is between 2.5 Lakhs to 5 Lakhs per year.",
      "MCI Screening Test is provided by most of the Russian universities. Graduates show excellent results in the FMGE exam as a result and land in the best hospitals and industries worldwide.",
      "Technically Equipped Learning - Russia is known for the advanced medical facilities.",
      "Many Specialization Courses - Russian universities provide an ample number of courses for students to choose and specialize.",
      "MBBS in Russia provides goal-oriented education.",
      "Faculties are highly qualified.",
      "Russia uses the latest teaching methods and technologies.",
      "Russia has a proper Indian Hostel and Indian Food (Veg & Non-Veg) which is easily accessible.",
      "The warden for boys and girls is separate and has complete security.",
      "Campus is ragging-free.",
      "Traveling in Russia is comparatively low-cost.",
      "Over 1000 students study at top medical colleges in Russia.",
    ],
    description:
      "Russia is a fine place for students who would love to pursue MBBS. It’s well-being and quality of life attracts the students. The course duration in Russia is 5.8 years. MBBS in Russia is considered as the best option for the students who want to study abroad. The reason it is considered as the best option is the advantage of getting high-quality education at an affordable cost. Russia med­ ical universities are recognized by MCI, WHO, UNESCO, etc. Students are keen to take admission in Russia, because of the Russian service and the students who get mbbs admission in Russia are praiseworthy. Doing MBBS in Russia is a great opportunity for the students. The Russian universities occupy the top 30 in the ranking.",
    steps: [
      "Applying for MBBS abroad can seem daunting, but with MOC - Medico Overseas Consultancy, the process is straightforward and hassle-free.",
      "Here’s a step-by-step guide to help you through the application process:",
      "Step 1: Research - Identify your preferred country and university with the help of MOC’s expert consultants.",
      "Step 2: Eligibility Check - Ensure you meet the eligibility criteria, including academic qualifications and language proficiency.",
      "Step 3: Document Preparation - Prepare necessary documents such as transcripts, passport, and medical certificates.",
      "Step 4: Application Submission - Submit your application through MOC to your chosen university.",
      "Step 5: Entrance Exams - Some universities may require entrance exams or interviews. Prepare accordingly.",
      "Step 6: Admission Confirmation - Receive your admission offer and confirm your seat.",
      "Step 7: Visa Application - Apply for a student visa with guidance from MOC.",
      "Step 8: Travel Arrangements - Make travel arrangements and plan your journey.",
      "Step 9: Arrival and Accommodation - Upon arrival, MOC assists with accommodation and settling in.",
      "Start your journey with MOC today and achieve your dream of studying MBBS abroad.",
      "Choose MOC for a reliable and successful MBBS abroad experience. Contact us today to get started on your path to a fulfilling medical career.",
    ],
    requirements: [
      "Candidate must submit the application form.",
      "Candidates must have a NEET-UG examination scorecard along with the admit card.",
      "The academic mark sheet and passing certificate (original and copy).",
      "The candidate must carry a transfer certificate / leaving certificate from the previous institution.",
      "Foreign students must have a valid passport.",
      "Birth certificates must be submitted during admission required for proof of date of birth.",
      "Provisional allotment letter generated online.",
      "Candidates must submit caste certificate and validity certificate. (SC/ST/OBC category candidates)",
      "Submit your ID proof during admission time (Aadhaar card/ PAN card/ driving license/ passport).",
      "Conduct and character certificate.",
      "Candidates should submit the medical certificate.",
      "Carry passport size photographs required for MBBS admission.",
      "Proof of nationality of India / Passport/ domicile /nationality certificate.",
      "Passport size photographs.",
      "Demand draft.",
      "Gap certificate (Affidavit) (if applicable).",
      "Migration certificate (if applicable).",
    ],
    collapseItems: [
      {
        title: "Our Services",
        servicesOffered: [
          "Counselling.",
          "Pre-Departure Briefing in Our Delhi Head Office.",
          "University Selection.",
          "Airport Drop To IGI Airport (New Delhi).",
          "Documentation.",
          "Airport Pick-Up From the Selected Country Airport.",
          "Provisional Admission.",
          "Bank Loan Assistance.",
          "Assistance & Legalization.",
          "Free 10 Mins Call With Parents From The Destination Airport After Customs Clearance.",
          "Travel Arrangements From the Destination Airport To The University Hostel.",
          "Hostel Room Allotment.",
          "Eligibility Certificate Application.",
          "Free Meals For Initial Few Days.",
          "University Admission.",
          "Visa Application.",
          "City Tour, University Campus Visit.",
        ],
      },
      {
        title: "Admission Application Processing Fee",
        servicesOffered: [
          "Registration Fees Rs. 25000 At the Time of Registration.",
          "Documentation Fee (Ministry Decree, EQE Approval) Rs. 65000 Within 5 days After Receiving Admission Letter.",
          "Invitation, Visa, Insurance & Flight Ticket Rs. 60000 Within 5 days After Receiving Admission Letter.",
        ],
      },
    ],
    universities: [
      {
        name: "Orenburg State Medical University, Russia",
        description: `Established in 1944, Orenburg State Medical University (OrSMU) is one of the top-ranked government medical universities located in the city of Orenburg, Russia.\n
        It offers courses leading to officially recognised higher education degrees such as bachelor’s degrees, master’s degrees, and doctorate degrees in several areas of study.\n
        The University meets all modern standards and requirements presented to higher medical schools. And that is why, Orenburg State Medical University is the most desired Russian medical university, majorly amongst Indian students who desire to study MBBS in Russia.\n
        Orenburg State Medical University provides the best-quality educational programs that are designed to offer training to the next generation of medical researchers, physicians, and healthcare professionals.\n
        Many renowned specialists in the medicine field have graduated from this university. They are working in state and private medical and preventive institutions, taking leading positions in state administrative structures and solving primary issues in the development of modern medicine.\n
        With a focused and skilled faculty, state-of-the-art infrastructure, library, well-equipped laboratories, museums, and skill lab facilities to offer better hands-on experience to the students, the university has been successful in attracting students globally, including Indian students.\n
        The medical graduates from OrSMU have been successfully practicing medicine in India, UK, USA, Malaysia, Middle East, and other European countries.\n
        Orenburg State Medical University strives to provide the best medical education to its students to prepare them to take up the challenges in the future so that when medical students graduate from this university, they have the potential to handle the responsibilities of the medicine field.\n
        At present, 1200+ Indian students are studying MBBS at Orenburg State Medical University.`,
        image: one,
        overview: {
          "University Recognitions":
            "ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI), GMC PLAB",
          "Medium of Teaching": "English",
          "MBBS Course Duration": "6 years (with internship)",
          "Eligibility Criteria": "Qualified Class 12 with 50% marks in PCB",
          "NEET Required": "Yes",
          "No. of Indian Students (currently enrolled)": "1200+",
          "Intake Period": "September",
        },
      },
      {
        name: "Perm State Medical University, Russia",
        description: `Perm State Medical University was established on September 22, 1916 in the Perm city of Russia.\n  Perm State Medical University is one of oldest and biggest universities of Russia. The university was started as a medical faculty of Perm State University in the year 1916. During the initial years after establishment, this faculty was a part of physics and mathematics faculty and then in 1917, it became an independent department of the medical faculty. \n

        In February 1931, the academy was named as the Perm Medical institute and later in 1994; the name of the institute was changed to Perm State Medical Academy by the orders of State Committee of Higher Education of the Russian Federation. Perm State Medical Academy became a member of the European Association of Medical Schools in Europe in 1997.\n
        
        Perm State Medical University holds the largest number of patents for inventions and utility models among all the medical institutions of the state. There are more than 500 employees working in PSMU including named scientists, professors and lecturers. More than 85% of full-time faculty members of PSMU hold a degree from the reputed universities. The scientists working in PSMU actively participate in various experiments and projects to contribute to the medical field by resolving the medical and scientific issues in the fields of cardiology, pediatrics, surgery, neurology, dentistry, epidemiology and other areas.\n
        
        At present, the students from more than 21 countries are studying MBBS from Perm State Medical University. The medical students are provided training in various programs of pre-university, undergraduate and postgraduate education. The students studying MBBS in Perm State Medical University also actively participate in various scientific seminars, projects and conferences held other universities. \n`,
        image: two,
        overview: {
          "Year of Establishment": "1916",
          "Type of University": "Government",
          duration: "6 years",
          recognitions: "WDOMS, ECFMG, FAIMER, NMC (erstwhile MCI)",
          intakePeriod: "September",
          mediumOfTeaching: "English",
          neetRequired: "Yes",
          eligibilityExam: "No",
          averageTuitionFees: "Rs. 2,90,000",
          indianStudents: "1200+",
        },
      },
      {
        name: "Mari State University, Russia",
        description: `Established in 1972 by the Ministry of Science and Higher Education of the Russian Federation.\n Mari State University (MarSU) is one of the rapidly growing classical universities of the Mari El Republic, Russia, located in the scenic city of Yoshkar-Ola which is the capital of Mari El Republic.\n

        The core aim of the university is to make higher education more accessible to all students around the world, allowing them to develop holistically and prepare them as specialists to work in the field of health care.\n The university curriculum and environment focuses on the developing and implementing innovative diagnostic, treatment, and prevention technologies while nurturing the essential values of compassion and empathy among its students.\n
        
        At present, the infrastructure at Mari State University features 7 university buildings and 8 hostel facilities. The university’s library comprises more than 1.1 million books. There are 7 reading rooms with more than 529 seats. The electronic catalogue of the library contains more than 200 thousand units and 17 databases. The university has a huge campus with a total area of 1,28,000 square metres. There are 400 candidates of sciences and associate lecturers and there is a staff of about 100 doctors of sciences and professors.\n`,
        image: three,
        overview: {
          recognitions: "ECFMG, WDOMS, FAIMER, NMC (erstwhile MCI)",
          mediumOfTeaching: "English",
          duration: "6 years (with internship)",
          eligibility: "Qualified Class 12 with 50% marks in PCB",
          neetRequired: "Yes",
          indianStudents: "1500+",
          averageTuitionFees: "Rs. 16,00,000*",
          averageCostOfLiving: "Rs. 8,000 - Rs. 10,000",
          averageHostelFees: "Included in Tuition Fees",
          intakePeriod: "September",
        },
      },
      {
        name: "Tver State Medical University, Russia",
        description: `Established in 1936, Tver State Medical University is a higher-education institution located in the medium city of Tver (population range of 250,000-499,999 inhabitants), Tver Oblast. Officially recognized by the Ministry of Health of the Russian Federation, Tver State Medical University is a coeducational Russian higher education institution.\n
        With commendable world ranking within 5000 universities, Tver State Medical University offers courses and programs leading to officially recognized higher education degrees such as bachelor’s degrees, master’s degrees, and doctorate degrees in several areas of study at affordable fee structures aided by scholarships as well as educational loans.\n
        Tver State Medical University is known for its scientific achievements, high educational preparation level, and material and technical facilities for research activities and educational processes.\n
        Today, students from more than a hundred nationalities are studying at Tver State Medical University, which aims to promote vast cultural interaction and mutual exchange between Eastern and Western nations.\n`,
        image: four,
        overview: {
          recognitions: "WDOMS, ECFMG, FAIMER, NMC (erstwhile MCI)",
          mediumOfTeaching: "English",
          duration: "6 years",
          eligibility: "Qualified Class 12 with 50% marks in PCB",
          neetRequired: "Yes",
          indianStudents: "1500+",
          averageTuitionFees: "Rs. 16,00,000*",
          averageCostOfLiving: "Rs. 8,000 - Rs. 10,000",
          averageHostelFees: "Included in Tuition Fees",
          intakePeriod: "September",
        },
      },
      {
        name: "Pskov State University, Russia",
        description: `Pskov State University was founded in 2011 by merging five leading educational institutions of the Pskov region. Each of them had its own history and traditions, which we value to this day.\n
        The priority of Pskov State University is the quality of education, providing training in a total of 190 Bachelor’s, Master’s, Specialist’s, and Postgraduate Degree Programs, alongside secondary vocational education and additional programs.\n
        Recognized as a flagship of the educational system in Northwest Russia, the university is acknowledged for its valuable impact both in Russia and abroad, evidenced by a large percentage of international students and participation in joint educational programs.\n
        The university features 22 training and laboratory buildings, 11 student dormitories for 3,500 residents, and a new campus set to open in 2023. The library holds over one million books and periodicals in both traditional and electronic formats.\n
        Currently, Pskov State University enrolls about 10,000 students, including 1,300 international students from 41 countries, fostering a comfortable environment for research and academic excellence.\n`,
        image: five,
        overview: {
          recognitions: "WDOMS, ECFMG, FAIMER, NMC",
          mediumOfTeaching: "English",
          duration: "6 years (with internship)",
          eligibility:
            "Minimum 50% aggregate score in PCB subjects; Minimum 17 years of age as of 31st December in the admission year; Qualifying NEET score.",
          neetRequired: "Mandatory",
          indianStudents: "1300+",
          averageTuitionFees: "Rs. 16,00,000*",
          averageCostOfLiving: "Rs. 8,000 - Rs. 10,000",
          averageHostelFees: "Included in Tuition Fees",
          intakePeriod: "September",
        },
      },
    ],
  },
  Kyrgyzstan: {
    country_title: "Why Kyrgyzstan?",
    description:
      "Kyrgyzstan can be an attractive destination for studies due to its affordable tuition fees, low cost of living, and a growing number of programs taught in English. The country’s universities offer a range of courses in diverse fields, and its beautiful natural landscapes and rich cultural heritage provide a unique backdrop for international students. Additionally, the friendly and welcoming local population makes it easier for students to adapt to a new environment. However, it’s essential to thoroughly research specific universities and programs to ensure they meet your academic and career goals.",

    questions: "Why Study MBBS in ",
    answer: [
      "Affordable Tuition: Kyrgyzstan offers cost-effective medical education compared to many other countries, making it accessible for international students.",
      "Recognized Degrees: Medical degrees from Kyrgyzstan are recognized by major medical councils and organizations worldwide.",
      "Quality Education: Many medical colleges in Kyrgyzstan maintain high educational standards and use English as the medium of instruction.",
      "Skilled Faculty: Kyrgyzstan has experienced and qualified faculty members in medical institutions who provide quality education.",
      "Cultural Diversity: Students can experience a rich cultural diversity and gain exposure to a variety of medical cases.",
      "Low Living Costs: The cost of living in Kyrgyzstan is relatively low, which is beneficial for international students on a budget.",
      "Language Advantage: English is widely spoken and understood, simplifying communication for international students.",
      "Clinical Experience: Students can gain valuable clinical experience in a wide range of medical facilities.",
      "Safety: Kyrgyzstan offers a relatively safe environment for international students.",
      "Admission Opportunities: Many Kyrgyzstan medical colleges offer admission options for international students with straightforward admission processes.",
    ],
    steps: [
      "After completing the visa processing time, get a valid passport and fly for your dreams.",
      "Submission of educational certificates and other essential documents required for MBBS admission.",
      "Admission will be based on merit and performance during the interview.",
      "Candidates will get an offer letter from the university within a couple of days.",
      "Pay 1st-year tuition fee of the MBBS course.",
      "Apply for the visa procedure.",
      "After completing the visa processing time, get a valid passport and fly for your dreams.",
    ],
    requirements: [
      "Candidate must submit the application form.",
      "Candidates must have a NEET-UG examination scorecard along with the admit card.",
      "The academic mark sheet and passing certificate (original and copy).",
      "The candidate must carry a transfer certificate / leaving certificate from the previous institution.",
      "Foreign students must have a valid passport.",
      "Birth certificates must be submitted during admission required for proof of date of birth.",
      "Provisional allotment letter generated online.",
      "Candidates must submit caste certificate and validity certificate. (SC/ST/OBC category candidates)",
      "Submit your ID proof during admission time (Aadhaar card/ PAN card/ driving license/ passport).",
      "Conduct and character certificate.",
      "Candidates should submit the medical certificate.",
      "Carry passport size photographs required for MBBS admission.",
      "Proof of nationality of India / Passport/ domicile /nationality certificate.",
      "Passport size photographs.",
      "Demand draft.",
      "Gap certificate (Affidavit) (if applicable).",
      "Migration certificate (if applicable).",
    ],
    collapseItems: [
      {
        title: "Our Services",
        servicesOffered: [
          "Counselling.",
          "Pre-Departure Briefing in Our Delhi Head Office.",
          "University Selection.",
          "Airport Drop To IGI Airport (New Delhi).",
          "Documentation.",
          "Airport Pick-Up From the Selected Country Airport.",
          "Provisional Admission.",
          "Bank Loan Assistance.",
          "Assistance & Legalization.",
          "Free 10 Mins Call With Parents From The Destination Airport After Customs Clearance.",
          "Travel Arrangements From the Destination Airport To The University Hostel.",
          "Hostel Room Allotment.",
          "Eligibility Certificate Application.",
          "Free Meals For Initial Few Days.",
          "University Admission.",
          "Visa Application.",
          "City Tour, University Campus Visit.",
        ],
      },
      {
        title: "Admission Application Processing Fee",
        servicesOffered: [
          "Registration Fees Rs. 25000 At the Time of Registration.",
          "Documentation Fee (Ministry Decree, EQE Approval) Rs. 65000 Within 5 days After Receiving Admission Letter.",
          "Invitation, Visa, Insurance & Flight Ticket Rs. 60000 Within 5 days After Receiving Admission Letter.",
        ],
      },
    ],
    universities: [
      {
        name: "Osh State University, Medical Faculty, Kyrgyzstan",
        description: `Osh State University is a public medical university in Osh, Kyrgyzstan, that has been training foreign students since 1992. Over 40,000 students study at this institute, including 3,000 from various countries such as India, Ukraine, China, and others. It is the largest university in the Kyrgyz Republic and is highly ranked by many institutions.\n
        The university is recognized by MCI, WHO, and is listed in the Avicenna Directory, International Medical Education Directory of FAIMER, and the World Directory of Medical Schools.\n
        Osh State University offers medical courses in both English and Russian for students from India. Currently, there are over 2,800 students studying medicine in Osh. The university has nearly 250 faculty members and teachers involved in training these students. The university also has tie-ups with several renowned and prestigious hospitals in Kyrgyzstan, providing students with valuable exposure to the latest technology and invaluable experience in the field of medicine.\n`,
        image: six,
      },
      {
        name: "Kyrgyz State Medical Academy, Kyrgyzstan",
        description: `Established in 1939, Kyrgyz State Medical Academy (KSMA) is one of the oldest medical universities in Kyrgyzstan. The first batch of the university consisted of about 200 students. The universities of Saint Petersburg, Moscow, Tashkent, and more helped immensely in its establishment in the capital of Kyrgyzstan, Bishkek. KSMA is considered the prime university among all medical colleges in Kyrgyzstan.\n
  The university has more than 540 faculty members and is recognized by WHO, FAIMER, IMED, and MCI. Students can appear for exams like USMLE, PLAB, and NZREX for further studies in various countries such as the USA, UK, and New Zealand.\n
  Apart from general medicine, stomatology and pediatrics are also available for students from India. The medical library of KSMA is one of the largest in Kyrgyzstan, comprising more than 400,000 books and also offering digital reading materials in CDs, providing suitable videos and illustrations.\n`,
        image: seven,
      },
      {
        name: "International School of Medicine, Bishkek, Kyrgyzstan",
        description: `International School of Medicine (ISM) was established in 2003 and named after B. Osmonov. It is a government university offering MBBS in Kyrgyzstan. The university was founded on April 2, 1993, with the aim of providing the best medical education and training to all medical aspirants of Kyrgyzstan and from different countries, including India. Another objective of the university is to educate medical aspirants at an affordable cost.\n
        International School of Medicine is affiliated with the Ministry of Health and Science Education of Kyrgyzstan. It is also approved by the National Medical Commission (NMC) and enlisted with the World Directory of Medical Schools (WDOMS), and also recognized and approved by other medical institutions around the world.\n
        ISM has state-of-the-art infrastructure and modern technologies to educate and train medical students to become excellent doctors and medical professionals. Currently, more than 3,300 students are pursuing MBBS at the university, including Indian students.\n
        At ISM, the medical faculty conducts scientific work in all areas of medicine, chemistry, biology, and morphology. The facilities include well-equipped laboratories, lecture halls, a library, and clinical facilities that allow students to explore and experience real-life medical situations. The university is affiliated with more than 27 clinics and hospitals for the clinical training of students.\n
        The university has more than 164 well-trained, highly qualified medical professors and doctors of sciences delivering quality education through lectures, practicals, and clinical training. Among the renowned professors, there are 3 Honored Doctors of the Kyrgyz Republic, 1 Honored Health Worker, 1 Honored Worker of Education, and 15 teachers with the badge "Excellent Health Worker of the Kyrgyz Republic."\n
        At ISM, students enjoy safe and comfortable accommodation with access to all basic amenities. Students are encouraged to engage in extracurricular activities such as sports, cultural events, and student organizations for their holistic development.\n`,
        image: eight,
        overview: {
          recognitions:
            "Ministry of Health and Science Education of Kyrgyzstan, WDOMS, ECFMG, FAIMER, NMC",
          "Medium Of Teaching": "English",
          duration: "6 years (including internship)",
          eligibility:
            "Minimum 50% aggregate score in PCB subjects, Minimum 17 years of age as of 31st December in the admission year, Qualifying NEET score",
          "Neet Required": "Mandatory",
          "Indian Students": "3300+",
          "Average Tuition Fees": "Rs. 16,00,000*",
          "Average Cost Of Living": "Rs. 8,000 - Rs. 10,000",
          "Average Hostel Fees": "Included in Tuition Fees",
          "In take Period": "September",
        },
      },
      {
        name: "Jalal-Abad State Medical University, Kyrgyzstan",
        description: `Jalal-Abad State Medical University (JASU), named after B. Osmonov, is a government university offering MBBS in Kyrgyzstan. The university was founded on April 2, 1993, with the aim of providing the best medical education and training to all medical aspirants of Kyrgyzstan and from different countries of the world, including India. Another objective of the university is to educate medical aspirants at an affordable cost.\n
        Jalal-Abad State Medical University is affiliated with the Ministry of Health and Science Education of Kyrgyzstan. It is also approved by the National Medical Commission (NMC) and enlisted with the World Directory of Medical Schools (WDOMS), and also recognized and approved by other medical institutions worldwide.\n
        JASU has state-of-the-art infrastructure and modern technologies to educate and train medical students to become excellent doctors and medical professionals to serve humanity. Currently, more than 3,300 students are pursuing MBBS at the university, including Indian students.\n
        At JASU, the medical faculty conducts scientific work in all areas of medicine, chemistry, biology, and morphology. The facilities include well-equipped laboratories, lecture halls, a library, and clinical facilities that allow students to explore and experience real-life medical situations. The university is affiliated with more than 27 clinics and hospitals for the clinical training of students.\n
        The university has more than 164 well-trained, highly qualified medical professors and doctors of sciences delivering quality education through lectures, practicals, and clinical training. Among the renowned professors, there are 3 Honored Doctors of the Kyrgyz Republic, 1 Honored Health Worker, 1 Honored Worker of Education, and 15 teachers with the badge "Excellent Health Worker of the Kyrgyz Republic."\n
        At JASU, students enjoy safe and comfortable accommodation with access to all basic amenities. Students are encouraged to engage in extracurricular activities such as sports, cultural events, and student organizations for their holistic development.\n`,
        image: nine,
        overview: {
          recognitions:
            "Ministry of Health and Science Education of Kyrgyzstan, WDOMS, ECFMG, FAIMER, NMC",
          "Medium Of Teaching": "English",
          duration: "6 years (including internship)",
          eligibility:
            "Minimum 50% aggregate score in PCB subjects, Minimum 17 years of age as of 31st December in the admission year, Qualifying NEET score",
          "Neet Required": "Mandatory",
          "Indian Students": "3300+",
          "Average Tuition Fees": "Rs. 16,00,000*",
          "Average Cost Of Living": "Rs. 8,000 - Rs. 10,000",
          "Average Hostel Fees": "Included in Tuition Fees",
          "Intake Period": "September",
        },
      },
      {
        name: "Asian Medical Institute, KANT",
        description: `Asian Medical Institute is a university situated in Kyrgyzstan. It is recognized by the Ministry of Education & Ministry of Health. It is also recognized by WHO and listed in the World Directory of Medical Schools. The faculty members are well-versed in English language. Each member holds a degree in Medicine and is either a M.D. or Ph.D. holder. Few members of the faculty are also specialists in their field.
      
        Various doctors from Europe, UK & USA visit the campus to impart new technological advances in the field of medicine to our students. Multiple councils of medicine from the countries of India, Pakistan, Nepal, USA, and Great Britain recognize the degree awarded by the Asian Medical Institute.`,
        image: ten,
      },
      {
        name: "Kyrgyz Russian Slavic University",
        description: `The Kyrgyz Russian Slavic University is one of the prestigious institutes of higher education in Kyrgyzstan. It provides education in 45 specialties and in three areas. The University was founded in 1993 in the city of Bishkek (formerly Frunze) on the basis of the Treaty “On friendship, cooperation and mutual assistance” between the Kyrgyz Republic and the Russian Federation. In the first year itself, there were about 200 students enrolled.
      
        The University is accredited and listed with the Educational Commission for Foreign Medical Graduates (ECFMG) in the USA, Institute of International Medical Education (IIME), International Medical Education Directory (IMED), Medical Council of India (MCI), and World Health Organization (WHO). This implies the degree from Kyrgyz Russian Slavic University is recognized worldwide.`,
        image: eleven,
      },
    ],
  },
  kazakhstan: {
    country_title: "kazakhstan",
    description:
      "Kazakhstan offers international students a unique and enriching study experience due to its diverse cultural and geographical landscape. It boasts a mix of modern cities and traditional nomadic heritage, making it an intriguing destination for those seeking cultural immersion. Additionally, the country’s educational institutions have been investing in improving their academic programs and infrastructure, providing quality education at a relatively affordable cost compared to many Western countries. With a growing emphasis on internationalization, Kazakhstan is becoming an increasingly attractive option for students seeking a well-rounded and affordable educational experience.",
    questions: "Why Study MBBS in ",
    answer: [
      "Affordable Tuition: Many medical universities in Kazakhstan offer cost-effective tuition fees, making it an economical option for aspiring doctors, especially when compared to Western institutions.",
      "Quality Education: Kazakhstan’s medical universities are recognized by international bodies like the World Health Organization (WHO) and the Medical Council of India (MCI). They follow modern curricula and provide quality education in English, ensuring that graduates are well-prepared for global medical practice.",
      "International Recognition: Graduates of Kazakhstan’s medical universities are eligible to practice medicine in various countries, and many institutions have collaboration agreements with hospitals and universities worldwide for clinical training and research opportunities.",
      "Cultural Diversity: Kazakhstan’s diverse culture and heritage offer an enriching experience for international students, fostering cross-cultural understanding and exposure to different medical practices.",
      "Low Living Costs: The cost of living in Kazakhstan is relatively low, making it more accessible for international students. This includes affordable accommodation, food, and transportation.",
      "English-Medium Programs: Many medical universities in Kazakhstan offer MBBS programs in English, eliminating the need for students to learn a new language before starting their medical studies.",
      "Student-Friendly Environment: Kazakhstan is known for its welcoming and safe environment, making it a comfortable destination for international students.",
    ],
    steps: [
      "After completing the visa processing time, get a valid passport and fly for your dreams.",
      "Submission of educational certificates and other essential documents required for MBBS admission.",
      "Admission will be based on merit and performance during the interview.",
      "Candidates will get an offer letter from the university within a couple of days.",
      "Pay 1st-year tuition fee of the MBBS course.",
      "Apply for the visa procedure.",
      "After completing the visa processing time, get a valid passport and fly for your dreams.",
    ],
    requirements: [
      "Candidate must submit the application form.",
      "Candidates must have a NEET-UG examination scorecard along with the admit card.",
      "The academic mark sheet and passing certificate (original and copy).",
      "The candidate must carry a transfer certificate / leaving certificate from the previous institution.",
      "Foreign students must have a valid passport.",
      "Birth certificates must be submitted during admission required for proof of date of birth.",
      "Provisional allotment letter generated online.",
      "Candidates must submit caste certificate and validity certificate. (SC/ST/OBC category candidates)",
      "Submit your ID proof during admission time (Aadhaar card/ PAN card/ driving license/ passport).",
      "Conduct and character certificate.",
      "Candidates should submit the medical certificate.",
      "Carry passport size photographs required for MBBS admission.",
      "Proof of nationality of India / Passport/ domicile /nationality certificate.",
      "Passport size photographs.",
      "Demand draft.",
      "Gap certificate (Affidavit) (if applicable).",
      "Migration certificate (if applicable).",
    ],
    universities: [
      {
        name: "Caspian Medical University",
        description: `Caspian University has a distinguished history, named for its ties to Kazakhstan's western region. Established with a focus on oil and gas, geology, and exploration, Caspian University's Graduate School of Medical Education now offers in-demand medical specialties. The university emphasizes professionalism and adherence to significant professional and moral values.
      
        With a commitment to high-quality education, Caspian University prioritizes the development of technologies to deliver in-depth medical knowledge. The MBBS degree remains highly sought after in transdisciplinary research and medical treatment, aimed at increasing the number of doctors for patient care and medical research. The university founded the Caspian International School of Medicine, which features cutting-edge lecture halls and training facilities.
      
        Caspian University is a multidisciplinary institution providing outstanding education through various programs, including 18 bachelor's degrees, 6 master's degrees, and 2 doctoral specialties. It aims to produce highly skilled medical professionals who meet global society's needs and expectations through the convergence of education, science, and clinical practice.`,
        image: twelve,
      },
      {
        name: "Kazakh Russian Medical University",
        description: `Kazakh Russian Medical University is one of the top private colleges in Kazakhstan, established in 1992 by Dr. Mukhtar Aliyevich Aliyev. Initially known as Kazakhstani Medical University, it offers comprehensive medical training through partnerships with renowned medical institutions.
      
        Admission is competitive, accepting both local and foreign students per the legislation of Kazakhstan and international treaties. The university adheres to educational benchmarks and continually tests new teaching methods to enhance medical education in the country.
      
        With over 200 lecturers, including esteemed doctors and foreign scientists, KRMU provides quality medical education. Students can participate in the academic mobility program, allowing them to study abroad and choose their language of instruction (Kazakh or Russian).
      
        Kazakh Russian Medical University maintains strong partnerships with various institutions, including Nagasaki University and Bashkir State Medical University, fostering joint research programs in areas such as genetics and maternal health care.`,
        image: thert,
      },
      {
        name: "Kazakh National Medical University",
        description: `Kazakh National Medical University (KazNMU) is one of the top medical universities in Kazakhstan, established in 1930 in Almaty. Recognized as a national university in 2001 due to its excellent academic results, KazNMU is committed to providing high-quality medical education globally.
      
        The university is recognized by the Ministry of Education and Science of the Republic of Kazakhstan and aims to be a competitive, innovation-focused institution. It conducts up-to-date scientific research on public health issues and implements findings in practical healthcare.
      
        KazNMU offers a wide range of medical courses at the bachelor, master, and doctorate levels, attracting students from various countries for MBBS programs. With a modern infrastructure and advanced medical instruments, KazNMU currently enrolls over 11,000 students and employs more than 1,500 faculty members, including over 500 candidates of science, 200 doctors of science, 130 professors, and 15 laureates of state prizes.`,
        image: fourteen,
      },
      {
        name: "West Kazakhstan Marat Ospanov Medical University",
        description: `The history of West Kazakhstan Marat Ospanov Medical University began in 1957, following an order from the USSR to provide qualified medical personnel for Western and North-Western Kazakhstan. On September 1, 1957, Aktobe State Medical Institute (ASMI) was established, focusing on "General Medicine." The first rector, Academician Dairov A.B., played a pivotal role in its development.
      
        The opening of the Institute marked a significant milestone in the advancement of medical education and science in Kazakhstan. Initially, faculty members were recruited from leading medical institutions across the USSR, quickly establishing a robust educational process and conducting the first enrollment of students, thus setting the foundation for higher education in Aktobe.`,
        image: fifteen,
      },
    ],
  },
  // Add more countries as needed
};

export default countriesData;

