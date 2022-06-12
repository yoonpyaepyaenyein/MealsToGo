import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components/native";

import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

/*
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
*/

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnSuoZY9nocGBQT_XI46LNNmnG-35sK3c",
  authDomain: "meals-to-go-c28d6.firebaseapp.com",
  projectId: "meals-to-go-c28d6",
  storageBucket: "meals-to-go-c28d6.appspot.com",
  messagingSenderId: "83277374676",
  appId: "1:83277374676:web:14db27636cf4b1f8fec741",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
