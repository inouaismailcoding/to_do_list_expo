import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceInfoComponent = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les informations sur le périphérique
    const fetchDeviceInfo = async () => {
      try {
        const brand = await DeviceInfo.getBrand();
        const model = await DeviceInfo.getModel();
        const systemName = await DeviceInfo.getSystemName();
        const systemVersion = await DeviceInfo.getSystemVersion();

        // D'autres informations peuvent être récupérées en utilisant d'autres fonctions de DeviceInfo

        // Mettez à jour l'état avec les informations récupérées
        setDeviceInfo({
          brand,
          model,
          systemName,
          systemVersion,
          // Ajoutez d'autres informations au besoin
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des informations sur le périphérique:', error);
      }
    };

    // Appel de la fonction
    fetchDeviceInfo();
  }, []); // Utilisez une dépendance vide pour s'assurer que cela ne se produit qu'une fois

  return (
    <View>
      {deviceInfo ? (
        <View>
          <Text>Marque: {deviceInfo.brand}</Text>
          <Text>Modèle: {deviceInfo.model}</Text>
          <Text>Système d'exploitation: {deviceInfo.systemName}</Text>
          <Text>Version du système: {deviceInfo.systemVersion}</Text>
          {/* Ajoutez d'autres éléments d'interface utilisateur pour afficher d'autres informations */}
        </View>
      ) : (
        <Text>Chargement des informations sur le périphérique...</Text>
      )}
    </View>
  );
};

export default DeviceInfoComponent;
