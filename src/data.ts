export const images = {
  logo: "/assets/Kalpana_Chawla_Tailoring_Institute_Logo.svg",
  hero: "/assets/woman-sewing.jpg",
  hands: "/assets/tailoring-hands.jpg",
  machine: "/assets/sewing-machine.jpg",
  embroidery: "/assets/embroidery.jpg",
  dress: "/assets/dress.jpg",
  blouse: "/assets/blouse.jpg",
  saree: "/assets/saree.jpg",
}

export const courses = [
  {
    slug: "tailoring-foundations",
    title: "Tailoring Foundations",
    category: "Tailoring",
    level: "Beginner friendly",
    duration: "Enquire for duration",
    fee: "Enquire for fee",
    image: images.machine,
    description:
      "Build strong foundations in measurements, cutting, machine handling and garment finishing.",
    skills: [
      "Machine basics",
      "Taking measurements",
      "Cutting",
      "Stitching",
      "Garment finishing",
    ],
  },
  {
    slug: "aari-work",
    title: "Aari Work",
    category: "Aari",
    level: "Beginner friendly",
    duration: "Enquire for duration",
    fee: "Enquire for fee",
    image: images.hands,
    description:
      "Learn Aari techniques through careful demonstrations and guided hands-on practice.",
    skills: [
      "Tool handling",
      "Basic stitches",
      "Motif practice",
      "Design techniques",
      "Finishing",
    ],
  },
  {
    slug: "embroidery",
    title: "Embroidery",
    category: "Embroidery",
    level: "All levels",
    duration: "Enquire for duration",
    fee: "Enquire for fee",
    image: images.embroidery,
    description:
      "Explore practical embroidery techniques for garments and decorative applications.",
    skills: [
      "Fabric preparation",
      "Stitch practice",
      "Pattern transfer",
      "Colour planning",
      "Finishing",
    ],
  },
  {
    slug: "blouse-stitching",
    title: "Blouse Stitching",
    category: "Advanced",
    level: "Skill-building",
    duration: "Enquire for duration",
    fee: "Enquire for fee",
    image: images.blouse,
    description:
      "Understand blouse measurements, pattern preparation, construction and neat finishing.",
    skills: [
      "Measurements",
      "Pattern understanding",
      "Cutting",
      "Construction",
      "Fit and finishing",
    ],
  },
]

export const services = [
  {
    slug: "custom-blouse-stitching",
    title: "Custom Blouse Stitching",
    image: images.blouse,
    description:
      "Blouses stitched to your measurements, garment needs and chosen reference.",
  },
  {
    slug: "dress-stitching",
    title: "Dress Stitching",
    image: images.dress,
    description:
      "Practical, detail-focused stitching for women’s dresses and custom requirements.",
  },
  {
    slug: "aari-embroidery-work",
    title: "Aari & Embroidery Work",
    image: images.embroidery,
    description:
      "Decorative handwork created after discussing the fabric, design and finish.",
  },
  {
    slug: "custom-womens-garments",
    title: "Custom Women’s Garments",
    image: images.saree,
    description:
      "Tailoring support for kurtis, salwar sets and other women’s garments.",
  },
]

export const products = [
  {
    slug: "featured-sarees",
    title: "Featured Sarees",
    category: "Sarees",
    image: images.saree,
    description: "Selected sarees available from our current collection.",
  },
  {
    slug: "ready-blouses",
    title: "Blouses",
    category: "Blouses",
    image: images.blouse,
    description:
      "Explore available blouse styles and enquire about size and fit.",
  },
  {
    slug: "womens-wear",
    title: "Women’s Wear",
    category: "Women’s Wear",
    image: images.dress,
    description: "A considered selection of women’s fashion products.",
  },
]

export const gallery = [
  { image: images.blouse, title: "Blouse detail", category: "Blouses" },
  {
    image: images.embroidery,
    title: "Embroidery detail",
    category: "Embroidery",
  },
  {
    image: images.hands,
    title: "Aari work in progress",
    category: "Aari Work",
  },
  { image: images.dress, title: "Garment inspiration", category: "Dresses" },
  {
    image: images.machine,
    title: "Tailoring workspace",
    category: "Tailoring",
  },
  { image: images.saree, title: "Saree collection", category: "Custom Work" },
]

export const faqs = [
  {
    category: "Courses",
    question: "Is this an online course?",
    answer: "No. Our training is completely offline and hands-on.",
  },
  {
    category: "Courses",
    question: "Do I need previous tailoring experience?",
    answer: "No. Beginners can start step by step with mentor guidance.",
  },
  {
    category: "Classes",
    question: "Is there an age limit?",
    answer: "No. Women of different age groups can learn.",
  },
  {
    category: "Classes",
    question: "What are the course duration and fees?",
    answer:
      "Duration and fee information depends on the selected course. Contact the institute for confirmed current details.",
  },
  {
    category: "Stitching",
    question: "Do you provide custom stitching?",
    answer: "Yes. We accept selected women’s garment stitching requirements.",
  },
  {
    category: "Stitching",
    question: "Can I bring my own design or reference?",
    answer:
      "Yes. Share your reference so the requirement, fabric and practical details can be discussed.",
  },
  {
    category: "Shop",
    question: "How do I order a product?",
    answer:
      "Choose a product and contact us to confirm current availability, details and ordering.",
  },
  {
    category: "General",
    question: "How can I contact the institute?",
    answer:
      "Use the contact enquiry form or the call and WhatsApp actions once contact details are confirmed.",
  },
]
