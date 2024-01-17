type HomeLinksType = {
  home: { href: string; title: string };
  featured: { href: string; title: string };
  contact: { href: string; title: string };
  // works: { href: string; title: string; target: boolean; icon: boolean };
  resume: { href: string; title: string; target: boolean; icon: boolean };
  [key: string]: {
    href: string;
    title: string;
    target?: boolean;
    icon?: boolean;
  };
};

export const HomeLinks: HomeLinksType = {
  home: { href: "#", title: "home" },
  featured: { href: "#featured", title: "featured" },
  contact: { href: "#contact", title: "contact" },
  // works: { href: "/works", title: "works", target: true, icon: true },
  resume: {
    href: "https://drive.google.com/file/d/1lkrThYx7G_yWGWQp0MAPyHH5urzLFAEc/view?usp=sharing",
    title: "resume",
    target: true,
    icon: true,
  },
};

export const WorksLinks: HomeLinksType = {
  home: { href: "#", title: "home" },
  featured: { href: "#featured", title: "featured" },
  contact: { href: "#contact", title: "contact" },
  // works: { href: "/works", title: "works", target: true, icon: true },
  resume: {
    href: "https://drive.google.com/file/d/1lkrThYx7G_yWGWQp0MAPyHH5urzLFAEc/view?usp=sharing",
    title: "resume",
    target: true,
    icon: true,
  },
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/nikhilsth4",
  github: "https://github.com/nikhilsth4",
  email: "11nikhil.shrestha@gmail.com",
};

export const projects = {
  pneumonia: {
    title: { word1: "Pneumonia Detection", word2: "AWS" },
    contents: [
      {
        description:
          "The project leverages AWS Services like AWS Sagemaker which helps to train and deploy the machine learning model along with the pretrained model image imported from AWS Sagemaker estimator and S3 for storing trained data and model.The use of lambda function helps to interact with the model as well as with the frontend application APIs request",
        image: {
          src: "/pneumonia/systemdesign.png",
          alt: "peumonia system design",
        },
      },
      {
        description: `For the training of the model 5,863 JPEG X-Ray pictures and two
          categories (Pneumonia/Normal).{" "}
          <Link href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia">
            Dataset
          </Link>`,
        image: {
          src: "/pneumonia/x-ray.png",
          alt: "x-ray image",
        },
      },
      {
        description: `Some notable hyperparameters configuration for training the model is
          image resolution is 224*224, with 2 types of image training used with
          image having pneumonia and not having pneumonia. 15 epochs, indicating
          the number of times the model will go through the entire dataset
          during training. The hyperparameter tuner will run up to 4 training
          jobs with different hyperparameter configurations to find the
          best-performing model.`,
        image: {
          src: "/pneumonia/hyperparameters.png",
          alt: "hyperparameters",
        },
      },
      {
        image: {
          src: "/pneumonia/training.png",
          alt: "training",
        },
      },
    ],
  },
};
