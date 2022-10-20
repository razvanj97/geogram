import { Route } from "react-router-dom";
import {
	IonApp,
	IonIcon,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonImg,
	IonGrid,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { camera } from "ionicons/icons";
import FeedTab from "./pages/FeedTab";
import "./images/icon.png";
import { MdFolderOpen, MdGridView, MdPhotoAlbum } from "react-icons/md";
import "./App.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import GridTab from "./pages/GridTab";
import AddPostTab from "./pages/AddPostTab";
import UpdatePostTab from "./pages/UpdatePostTab";

setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Route exact path="/FeedTab">
							<FeedTab />
						</Route>
						<Route exact path="/GridTab">
							<GridTab />
						</Route>
						<Route exact path="/AddPostTab">
							<AddPostTab />
						</Route>
						<Route exact path="/UpdatePostTab/:id">
							<UpdatePostTab />
						</Route>
						<Route exact path="/">
							<FeedTab />
						</Route>
					</IonRouterOutlet>
					<IonTabBar slot="bottom">
						<IonTabButton tab="feed-tab" href="/FeedTab">
							<MdPhotoAlbum />
						</IonTabButton>
						<IonTabButton tab="grid-tab" href="/GridTab">
							<MdGridView />
						</IonTabButton>
						<IonTabButton tab="camera-tab" href="/AddPostTab">
							<IonIcon icon={camera}></IonIcon>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
