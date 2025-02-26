type Profile = {
  name: string, 
  description: string,
  image: string,
  email: string,
}

type SocialLink = {
  label: string
  link: string
}

export const PERSONAL_INFO: Profile = {
  name: 'Kritika Parmar',
  description: 'Machine Learning Engineer specializing in AI-driven solutions, with expertise in NLP, deep learning, and large-scale model deployment.',
  image: 'https://i.ibb.co/C3yWS5DS/Whats-App-Image-2025-02-26-at-19-08-59-d601d428.jpg',
  email: 'kritikaparmar07@gmail.com'
}


export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/kritikaparmar-programmer',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/KritikaParmar5',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kritika-parmar-10244a193/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kritikaparmar.music',
  },
]