import { Camera, CameraResultType } from "@capacitor/camera";
import { IonButton, IonImg, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import getGeolocation from "../services/getGeolocation";
import { addDoc } from "firebase/firestore";
import { postsCollectionRef, storage } from "../firebase-config";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const AddPostForm = () => {
	const history = useHistory();

	const [description, setDescription] = useState("");
	const [longtitude, setLongtitude] = useState(0);
	const [latitude, setLatitude] = useState(0);
	const [image, setImage] = useState({});

	const [isLoading, setIsLoading] = useState(false);

	const submitButtonRef = useRef();

	useEffect(() => {
		takePicture();
	}, []);

	useEffect(() => {
		if (!image.dataUrl) {
			submitButtonRef.current.disabled = true;
		} else {
			submitButtonRef.current.disabled = false;
		}
	}, [image]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const post = {
			description: description,
			geolocation: { _long: longtitude, _lat: latitude },
			imageUrl: await uploadImage(image),
		};

		await addDoc(postsCollectionRef, post);

		history.replace("/FeedTab");
	};

	const uploadImage = async (image) => {
		const imageRef = ref(storage, `images/${v4()}.${image.format}`);
		await uploadString(imageRef, image.dataUrl, "data_url");
		const url = await getDownloadURL(imageRef);
		return url;
	};

	const takePicture = async () => {
		const imageOptions = {
			quality: 80,
			width: 500,
			allowEditing: true,
			resultType: CameraResultType.DataUrl,
		};

		try {
			const image = await Camera.getPhoto(imageOptions);
			const geolocation = await getGeolocation();

			setLongtitude(geolocation.coords.longitude);
			setLatitude(geolocation.coords.latitude);
			setImage(image);
		} catch {}
	};

	return (
		<>
			{image && <IonImg src={image.dataUrl} alt={description} />}
			<form onSubmit={(e) => handleSubmit(e)}>
				<IonItem>
					<IonLabel>Description:</IonLabel>
					<IonInput
						required
						onIonChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
				</IonItem>

				<IonItem>
					<IonLabel>Longtitue:</IonLabel>
					<IonInput
						required
						onIonChange={(e) => setLongtitude(e.target.value)}
						value={longtitude}
					/>
				</IonItem>

				<IonItem>
					<IonLabel>Latitude:</IonLabel>
					<IonInput
						required
						onIonChange={(e) => setLatitude(e.target.value)}
						value={latitude}
					/>
				</IonItem>

				<IonButton onClick={() => takePicture()}>Take picture</IonButton>

				<IonButton ref={submitButtonRef} type="submit">
					Save
				</IonButton>
				{!image.dataUrl && <p>Image is required.</p>}
				{isLoading && <p>Loading...</p>}
			</form>
		</>
	);
};

export default AddPostForm;
