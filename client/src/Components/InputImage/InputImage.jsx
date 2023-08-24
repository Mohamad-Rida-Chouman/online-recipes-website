import React, { useState } from 'react';
import './inputImage.css';
import '../../base.css';

const InputImage = ({ onChange, value, setImages }) => {
	const selectFiles = async (event) => {
		const files = event.target.files;
		const images = [];
		const readImage = (file) => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result);
				reader.onerror = (error) => reject(error);
			});
		};

		for (let i = 0; i < files.length; i++) {
			try {
				const image = await readImage(files[i]);
				images.push(image);
			} catch (error) {
				console.error('Error reading image:', error);
			}
		}
		setImages(images);
	};
	return (
		<div className="input-image-container width-100 padding-m flex justify-center">
			<input
				className="input-file width-100 padding-m"
				name="photos"
				type="file"
				id="input-file-label"
				onChange={selectFiles}
				multiple
			/>
			<label
				className="input-file-label width-100 padding-m"
				htmlFor="input-file-label"
				value={value}
				onChange={onChange}
			>
				Click to upload image
			</label>
		</div>
	);
};

export default InputImage;
