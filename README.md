# WAVE — Générer le fichier .apk avec GitHub (sans rien installer)

Ce dossier contient tout ce qu'il faut pour que **GitHub compile automatiquement
un fichier .apk** de ton application WAVE, que tu pourras ensuite installer
directement sur ton téléphone Android — sans passer par un navigateur.

## Étape 1 — Créer le dépôt sur GitHub

1. Va sur [github.com](https://github.com) et connecte-toi (ou crée un compte).
2. Clique sur **New repository** (bouton vert en haut à droite).
3. Donne-lui un nom, par exemple `wave-music-player`.
4. Laisse-le en **Public** (plus simple) ou **Private**, comme tu préfères.
5. Ne coche aucune case (pas de README, pas de .gitignore) — on a déjà tout.
6. Clique sur **Create repository**.

## Étape 2 — Envoyer ce dossier sur GitHub

Sur la page qui s'affiche après la création, GitHub te propose plusieurs
méthodes. La plus simple si tu n'es pas habitué à Git :

1. Clique sur **uploading an existing file** (lien dans la page).
2. Glisse-dépose **tous les fichiers et dossiers de ce projet**
   (en gardant la structure : `www/`, `.github/`, `package.json`,
   `capacitor.config.ts`, `.gitignore`).
   - ⚠️ Important : le dossier `.github` doit garder son nom avec le point
     devant, et sa structure `.github/workflows/build-apk.yml` doit être respectée.
3. En bas de la page, clique sur **Commit changes**.

## Étape 3 — Lancer la fabrication de l'APK

1. Dans ton dépôt GitHub, clique sur l'onglet **Actions** (en haut).
2. Tu devrais voir un workflow nommé **Build APK WAVE** qui s'est lancé
   automatiquement après ton upload (ça prend 3 à 6 minutes).
   - S'il ne s'est pas lancé seul, clique sur **Build APK WAVE** dans la liste
     à gauche, puis sur le bouton **Run workflow** à droite.
3. Attends que le rond jaune devienne une **coche verte** ✅.

## Étape 4 — Télécharger ton APK

1. Clique sur le run terminé (celui avec la coche verte).
2. Tout en bas de la page, dans la section **Artifacts**, tu verras
   **wave-apk**. Clique pour le télécharger.
3. Ça télécharge un fichier `.zip` — dézippe-le, tu trouveras
   **app-debug.apk** à l'intérieur.

## Étape 5 — Installer l'APK sur ton téléphone

1. Transfère le fichier `app-debug.apk` sur ton téléphone Android
   (par câble USB, Google Drive, Bluetooth, ou en téléchargeant
   directement depuis GitHub sur le téléphone si tu as un navigateur
   ailleurs, ou via un gestionnaire de fichiers).
2. Touche le fichier `.apk` dans ton gestionnaire de fichiers Android.
3. Android va te demander d'autoriser "l'installation depuis cette
   source" — accepte (c'est juste une protection standard d'Android).
4. L'app **WAVE** s'installe, avec sa propre icône sur l'écran d'accueil,
   exactement comme une app du Play Store.

## Pour mettre à jour l'app plus tard

Chaque fois que tu modifies `www/index.html`, ré-uploade juste ce fichier
sur GitHub (en remplaçant l'ancien) — le workflow se relance automatiquement
et te génère un nouvel APK à télécharger.

## Notes techniques

- L'APK généré est en mode **debug** : parfait pour ton usage personnel,
  pas besoin de "signer" l'app puisque tu ne publies pas sur le Play Store.
- Aucune clé secrète, aucun mot de passe n'est nécessaire pour ce workflow.
- Si le workflow échoue (croix rouge ❌), clique sur le run pour voir le
  message d'erreur détaillé dans les logs.
