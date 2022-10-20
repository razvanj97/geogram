import {
	IonContent,
	IonImg,
	IonPage,
	withIonLifeCycle,
	useIonViewWillEnter,
} from "@ionic/react";
import "./GridTab.css";
import React, { useState } from "react";
import getPosts from "../services/getPosts";
import { useHistory } from "react-router-dom";

const GridTab = React.forwardRef(() => {
	const history = useHistory();

	const [posts, setPosts] = useState([]);

	useIonViewWillEnter(() => {
		fetchData();
	});

	const fetchData = async () => {
		const posts = await getPosts();
		setPosts(posts);
	};

	return (
		<IonPage>
			<IonContent fullscreen={true}>
				<div className="flex-container">
					{posts.lenth < 1 && <p>You don't have any posts yet.</p>}
					{posts.map((post) => (
						<IonImg
							className="individual-post"
							onClick={() => {
								history.push(`/UpdatePostTab/${post.id}`);
							}}
							key={post.id}
							src={post.imageUrl}
							alt={post.description}
						/>
					))}
				</div>
			</IonContent>
		</IonPage>
	);
});

export default withIonLifeCycle(GridTab);
