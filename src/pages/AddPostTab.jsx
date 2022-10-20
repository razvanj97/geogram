import { IonContent, IonPage } from "@ionic/react";
import AddPostForm from "../components/AddPostForm";
import "./AddPostTab.css";

const AddPostTab = () => {
	return (
		<IonPage>
			<IonContent fullscreen={true} className="create-post-page-content">
				<div className="create-post-form">
					<AddPostForm />
				</div>
			</IonContent>
		</IonPage>
	);
};

export default AddPostTab;
