let firebaseAppCredentials;

try {
  firebaseAppCredentials = JSON.parse(
    import.meta.env.VITE_APP_FIREBASE_APPLICATION_CREDENTIALS
  );
} catch (error) {
  console.error("Error al cargar las credenciales de Firebase:", error);
  console.error(
    "Asegúrate de que el archivo .env esté correctamente configurado."
  );
}

export { firebaseAppCredentials };
