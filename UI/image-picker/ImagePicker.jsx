"use client";
import classes from "./ImagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ name, label }) {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState()
  const handlePickImage = () => {
    inputRef.current.click();
  };
  const handleUploadImage = (event) => {
    const file = event.target.files[0]
    if (!file) {
        setImageUrl(null)
        return
    }
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
        setImageUrl(fileReader.result)
        console.log(fileReader.result);
        
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          ref={inputRef}
          name={name}
          onChange={handleUploadImage}
          required
          accept="image/jpg, image/jpeg, image/png"
        />
        <button 
            type="button"
            className={classes.button}
            onClick={handlePickImage}>
            Pick an Image
        </button>
      </div>
      <div className={classes.preview}>
            {
                !imageUrl ? <p>No Image Uploaded yet</p> :
                <Image fill src={imageUrl} alt="Uploaded Image"/>
            }
      </div>
    </div>
  );
}
