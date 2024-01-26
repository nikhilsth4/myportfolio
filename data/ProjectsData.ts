type Image = {
  src: string;
  alt: string;
};

type Link = {
  href: string;
  title: string;
};

type Content = {
  description?: string;
  image?: Image;
  link?: Link;
};

type Title = {
  word1: string;
  word2: string;
};

export type ProjectLinks = {
  detail?: string;
  code?: string;
  live?: string;
  [key: string]: string | undefined;
};

export type Project = {
  title: Title;
  techStack: string;
  contents?: Content[];
  description: string;
  links: ProjectLinks;
  thumbnail: string;
};

type Projects = {
  [key: string]: Project;
};

export const projects: Projects = {
  pneumonia: {
    title: { word1: "Pneumonia Detection", word2: "AWS" },
    techStack: "AWS Sagemaker, AWS Lambda, React.js",
    // thumbnail: "/demo.jpg",
    thumbnail: "/pneumonia/thumbnail.png",
    description:
      "The Pneumonia Detection utilizes AWS Sagemaker and Lambda, employing a dataset of 5,863 X-Ray images with two categories (Pneumonia/Normal). The model is trained with hyperparameters such as a 224*224 image resolution, 15 epochs, and a hyperparameter tuner for optimizing performance through multiple training jobs",
    links: {
      detail: "works/pneumonia",
    },
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
        description:
          "For the training of the model 5,863 JPEG X-Ray pictures and two categories (Pneumonia/Normal).",
        image: {
          src: "/pneumonia/x-ray.png",
          alt: "x-ray image",
        },
        link: {
          href: "https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia",
          title: "Dataset",
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
  ecommerce: {
    title: { word1: "Ecommerce", word2: "React" },
    techStack: "React, Firebase, Stripe",
    thumbnail: "/ecommerce/ecommerce-thumbnail.png",
    description:
      "The project utilizes a normal ecommerce app which uses React for rendering, Firebase for authentication and Stripe for payment",
    links: {
      live: "https://ecommerce-comfy-react.netlify.app/",
      code: "",
    },
  },
};
