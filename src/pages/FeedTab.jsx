import {
	IonButton,
	IonContent,
	IonImg,
	IonIcon,
	IonPage,
	withIonLifeCycle,
	useIonViewWillEnter,
} from "@ionic/react";
import { deleteDoc, doc } from "firebase/firestore";
import { MdEditNote, MdDelete } from "react-icons/md";
import React, { useState } from "react";
import { db } from "../firebase-config";
import getPosts from "../services/getPosts";
import "./FeedTab.css";

const FeedTab = React.forwardRef(() => {
	const [posts, setPosts] = useState([]);

	useIonViewWillEnter(() => {
		fetchData();
	});

	const fetchData = async () => {
		const posts = await getPosts();
		setPosts(posts);
	};

	const handleDelete = (e) => {
		const id = e.target.id;
		deletePostById(id);
		const updatedPosts = posts.filter((post) => post.id !== id);
		setPosts(updatedPosts);
	};

	const deletePostById = async (id) => {
		const postRef = doc(db, "posts", id);
		await deleteDoc(postRef);
	};

	return (
		<IonPage fullscreen={true} className="ionpage">
			<IonContent fullscreen={true}>
				{posts.lenth < 1 && <p>You don't have any posts yet.</p>}
				{posts.map((post) => (
					<div key={post.id} className="post">
						<IonImg
							className="post-image"
							src={post.imageUrl}
							alt={post.description}
						/>
						<section className="post-body">
							<p className="description">
								<strong>Description: </strong>
								{post.description}
							</p>
							<section className="post-lower-body">
								<section className="location">
									<p className="coordonate">
										<strong>Longtitude: </strong>
										{post.geolocation._long}
									</p>
									<p className="coordonate">
										<strong>Latitude:</strong> {post.geolocation._lat}
									</p>
								</section>
								<div className="buttons-container">
									<IonButton
										className="edit post-button"
										routerLink={`/UpdatePostTab/${post.id}`}>
										<MdEditNote className="button-icon edit-icon" />
									</IonButton>
									<IonButton
										className="delete post-button"
										id={post.id}
										onClick={(e) => handleDelete(e)}>
										<MdDelete className="button-icon delete-icon" />
									</IonButton>
								</div>
							</section>
						</section>
					</div>
				))}
			</IonContent>
		</IonPage>
	);
});

export default withIonLifeCycle(FeedTab);
