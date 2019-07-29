dashCash
A dash cam that crowd sources videos of bad drivers

#Getting started If this is your first time using react native, you'll need to work on some configurations depending on the system that you're running. Following the following instructions to setup your development environment with IOS or Android. https://facebook.github.io/react-native/docs/running-on-device - If you're running a mac, the setup should be very simple. Open up the .xcode-project file w/ xcode in the ios directory and allow the project to build. X-code should have simulators installed and will default to using the latest iphone model.

We are using yarn for package management. 
- To  add a package: 

yarn add react-native-package-name
react-native link react-native-package-name

Additionally, i'm using nvm w/ an alias at v10.1.0

Running an android on a mac required me to do the following

Install the latest version of Java https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html
Since we are leveraging react-native-camera utility, you'll need to update your build.gradle file with the following configuration
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

#Adding Features
We'll use feature branches so that master stays in a working state. When you want to add something, checkout a branch with that features name, then  push to that branch when done. Then create a Pull Request to merge changes into master.

1. checkout master branch: git checkout master
2. pull recent changes:  git pull
3. checkout your feature branch: git checkout -b my-feature
4. commit changes:  git commit -a -m "adding my feature"
5. push the changes up:   git push origin my-feature
6. Make a pull request from github from your feature to master

# To Start project

Make sure cocoapods is installed on your computer (brew install cocoapods)

yarn install
cd ios && pod install

yarn ios  or yarn andriod

#Recomended Reading
React Navigation:
https://reactnavigation.org/docs/en/getting-started.html

