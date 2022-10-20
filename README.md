# App Name: Geogram

---

# Team members: Iva & Razvan

---

# Project Description

Due to the popularity and familiaity of people around the world with Instagram, we have decided to attempt creating a basic clone verion, which we've named Geogram. Why? Because it allows the user to take photos and adds the location of the photo under it.

# Design

The design choices were somewhat limited by our understanding of how to customize Ionic components, and that a lot of the components are based on the Shadow-Dom, hence not managing to overwrite the CSS the way we would've wish for, leaving us with different issues that will be described into the "Known Issues" part of the readme file.

# Thinking in React

The project is structured following the React components methods, where each page in the app is a different react component with its own css equivalent file.

# Run the app

To run the app in the browser the following commands are needed:

- npm i
- ionic serve
  These should be enough to get the project running in the browser (fingers crossed)

At the time, we have not managed to get the app to run on iOS, Xcode constantly failing to build the app.

On Android studio, the app should be (at least it worked for us) able to open the android studio and simulate an android device following this command:

- ionic cap open android
  Please note, Android Studio needs to be installed on the testing device for the command to work.
  An Android device is also required to be connected to the laptop/pc running Android studio for the simulation to work.

Permissions might be required for the camera to work. Those are in the 'AndroidManifest.xml' file, located under android/app/src/main/.

# Known Issues & Bugs & Challanging

As nothing goes smooth all the time, we have had planty of issues and frustrations with React Ionic.
A list of non-functioning or partially functioning features that required future development:

- We were unable to get the Splash Screen and Icons going, due to terminal error while trying to follow the Splash Screen documentation at: https://ionicframework.com/docs/native/splash-screen, throwing an error on the 'ionic cap sync' command (Non-functional)
- We were unable to customize the CSS in a way that on large screens the content gets align to the center of the screen, we have managed to just set the width limit to 900px (Partially functional)
- No matter the path structure, the IonImg tag (neither the HTML img tag) would load the icon.png ('official' logo) into the bottom bar navigator (Non-functional)
- Sometimes the 'Delete' button doesn't work, but we are not sure if is an issue in our code, or in the way we set Firebase (Partially funcional)

# Conclusion & Final Taughts

While not complex as an app, working with limited knowledge on a new technology (React Ionic) has proven difficult and challangeing, but also insightful with plenty of new learnings
