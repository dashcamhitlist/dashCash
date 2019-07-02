# dashCash
A dash cam that crowd sources videos of bad drivers

#Getting started
If this is your first time using react native, you'll need to work on some configurations depending on the system that you're running. Following the following instructions to setup your development environment with IOS or Android. https://facebook.github.io/react-native/docs/running-on-device
    - If you're running a mac, the setup should be very simple. Open up the .xcode-project file w/ xcode in the ios directory and allow the project to build. X-code should have simulators installed and will default to using the latest iphone model. 

Currently using npm and yarn for package management. Might be able to remove npm so we only have one package manager. Additionally, i'm using nvm w/ an alias at v10.1.0

Running an android on a mac required me to do the following 
1. Install the latest version of Java https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html
2. Since we are leveraging react-native-camera utility, you'll need to update your build.gradle file with the following configuration

```
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' <-- insert this line
  }
} ```

#Project Checklist
1. Establish core features of the application. Which technologies that will be use to serve 
2. Create a design documentation that hightlights the following items
  * Front End Component App Structure 
  * BackEnd Data Processing 

#BackEnd service
1. Well be using a serverless architecture using AWS.

