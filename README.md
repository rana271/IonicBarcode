npm install @capacitor/camera
npx cap sync
iOS

iOS requires the following usage description be added and filled out for your app in Info.plist:

    NSCameraUsageDescription (Privacy - Camera Usage Description)
    NSPhotoLibraryAddUsageDescription (Privacy - Photo Library Additions Usage Description)
    NSPhotoLibraryUsageDescription (Privacy - Photo Library Usage Description)

Read about Configuring Info.plist in the iOS Guide for more information on setting iOS permissions in Xcode
For Android
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
