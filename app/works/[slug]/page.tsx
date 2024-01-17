import HeaderTitle from "@/components/HeaderTitle";
import Link from "@/components/Link";
import Navbar from "@/components/Navbar";
import { HomeLinks, projects } from "@/data";
import Image from "next/image";
import React from "react";

const WorkDescription = () => {
  const { pneumonia } = projects;
  const { contents } = pneumonia;
  return (
    <>
      <Navbar linksData={HomeLinks} />
      <div className="padding-container">
        <HeaderTitle
          word1={pneumonia.title.word1}
          word2={pneumonia.title.word2}
          className="mt-12 mb-10`"
        />

        {contents.map((content, index) => {
          const { description, image } = content;
          return (
            <>
              {description && <p key={index}>{description}</p>}
              {image && (
                <Image
                  src={image.src}
                  alt={image.alt || "image"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto rounded-md my-6"
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default WorkDescription;

{
  /* <div className="padding-container">
  <HeaderTitle word1="Pneumonia Detection" word2="AWS" className="mt-12 mb-8" />
  <p>
    The project leverages AWS Services like AWS Sagemaker which helps to train
    and deploy the machine learning model along with the pretrained model image
    imported from AWS Sagemaker estimator and S3 for storing trained data and
    model.The use of lambda function helps to interact with the model as well as
    with the frontend application APIs request
  </p>
  <Image
    src="/pneumonia/systemdesign.png"
    alt="profile photo"
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto rounded-md my-6"
  />
  <p>
    For the training of the model 5,863 JPEG X-Ray pictures and two categories
    (Pneumonia/Normal).{" "}
    <Link href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia">
      Dataset
    </Link>
  </p>
  <Image
    src="/pneumonia/x-ray.png"
    alt="profile photo"
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto rounded-md my-6"
  />

  <p>
    Some notable hyperparameters configuration for training the model is image
    resolution is 224*224, with 2 types of image training used with image having
    pneumonia and not having pneumonia. 15 epochs, indicating the number of
    times the model will go through the entire dataset during training. The
    hyperparameter tuner will run up to 4 training jobs with different
    hyperparameter configurations to find the best-performing model.
  </p>
  <Image
    src="/pneumonia/hyperparameters.png"
    alt="profile photo"
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto rounded-md my-6"
  />

  <Image
    src="/pneumonia/training.png"
    alt="profile photo"
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto rounded-md my-6"
  />
</div>; */
}
