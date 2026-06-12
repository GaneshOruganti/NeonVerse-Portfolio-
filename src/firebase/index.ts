
'use client';

import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

export function initializeFirebase(): {
  app: FirebaseApp | null;
  db: Firestore | null;
  auth: Auth | null;
} {
  // Check if we have at least an API key before trying to initialize.
  // This prevents runtime crashes when environment variables are missing.
  const hasValidConfig = firebaseConfig.apiKey && firebaseConfig.apiKey !== 'YOUR_API_KEY';

  if (!hasValidConfig) {
    console.warn("Firebase configuration is missing or invalid. Please check your .env file.");
    return { app: null, db: null, auth: null };
  }

  try {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore(app);
    const auth = getAuth(app);

    return { app, db, auth };
  } catch (error) {
    console.error("Firebase failed to initialize:", error);
    return { app: null, db: null, auth: null };
  }
}

export * from './provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './auth/use-user';
