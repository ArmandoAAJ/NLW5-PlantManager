import React, { useEffect } from "react";
import { Alert } from "react-native";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

import { Routes } from "./src/routes/index";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    // Função para requisitar as permissões diretamente na splash screen
    async function requestPermissionsAsync() {
      // Esconde a splash screen; sem isso o app fica travado na tela de splash
      await SplashScreen.hideAsync();

      // Função para ser reusada no Alert de pedido de permissão
      async function defaultRequestNotifications() {
        return await Notifications.requestPermissionsAsync({
          ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true,
          },
        });
      }

      // Obter as permissões garantidas
      const settings = await defaultRequestNotifications();
      // Se não permitido, pede novamente
      if (
        !(
          settings.granted ||
          settings.ios?.status ===
            Notifications.IosAuthorizationStatus.PROVISIONAL
        )
      ) {
        Alert.alert(
          "Acesso às notificações",
          "Para a melhor experiência in-app, dê acesso às notificações.",
          [
            {
              text: "Não 😤",
              style: "cancel",
            },
            {
              text: "Sim 😎",
              onPress: defaultRequestNotifications,
            },
          ]
        );
      }
    }

    requestPermissionsAsync();
  }, []);

  // useEffect(() => {
  //   // const subscription = Notifications.addNotificationReceivedListener(
  //   //   async (notification) => {
  //   //     const data = notification.request.content.data.plant as PlantProps;
  //   //   }
  //   // );
  //   // return () => subscription.remove();
  //   async function notifi() {
  //     const data = await Notifications.getAllScheduledNotificationsAsync();
  //     console.log("####notifi###");
  //     console.log(data);
  //   }
  //   notifi();
  // }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
