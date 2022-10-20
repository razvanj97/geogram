import { IonButton, IonImg, IonInput, IonItem, IonLabel } from "@ionic/react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { useHistory } from "react-router-dom";

const AddPostForm = ({ id }) => {
	const history = useHistory();

	const [description, setDescription] = useState("");
	const [longtitude, setLongtitude] = useState(0);
	const [latitude, setLatitude] = useState(0);
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const fetchedPost = await getPostById(id);
		setDescription(fetchedPost.description);
		setImageUrl(fetchedPost.imageUrl);
		setLongtitude(fetchedPost.geolocation._long);
		setLatitude(fetchedPost.geolocation._lat);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const post = {
			description: description,
			geolocation: { _long: longtitude, _lat: latitude },
		};

		updatePost(id, post);
		history.replace("/FeedTab");
	};

	const getPostById = async (id) => {
		const docRef = doc(db, "posts", id);
		const docSnap = await getDoc(docRef);
		return docSnap.data();
	};

	const updatePost = async (id, post) => {
		const postDoc = doc(db, "posts", id);
		await updateDoc(postDoc, post);
	};

	return (
		<>
			<IonImg src={imageUrl} alt={description} />
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

				<IonButton type="submit">Save</IonButton>
			</form>
		</>
	);
};

export default AddPostForm;
