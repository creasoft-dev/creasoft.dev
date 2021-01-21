---
title: "Ionic React App with Social Login"

author: Young-Suk Ahn Park
date: 2021-01-20
tags: ["post", "dev"]

description: A PoC on Ionic Reaact app integrating with Social Login for authentication 
keywords: ionic, mobile, react, auth

imageUrl: /images/posts/2021/2020-01-20-ionic-react-social-login-poc.jpg

---


## Introduction
Developing (learning to develop) a mobile app was on my list for several years. I was too lazy to learn a new language (Objective C) and Android Java development seemed a little convoluted. Then came the hybrid model (basically Cordova), and  new language or iOS (Swift), and different other languages and frameworks: Xamarin, NativeScript, Flutter, ReactNative, Ionic.

Now that Ionic supports React and has a novel way of deploying on mobile - Capacitor. I finally decided to give it a try.

My first order concern was Social Login. If I am to build an app, I want to lower the barrier of entry by allowing them to login with popular social platforms.

I have built web applications that used social login using OpenID Connect (OIDC) specification, using the OAuth 2.0 Authorization Code grant type. But I was not sure how that would work in a mobile environment using the hybrid model, which is basically a web app running locally on the device.

So this is my write up on the Ionic React Google Login Proof of Concept (PoC) based on a demo repo I found in GitHub.

## Researching the Auth Libraries 

I did some research and found few libraries that can help me integrate Auth in Ionic app built with Capacitor:

1. [ionic-appauth](https://github.com/wi3land/ionic-appauth): 35 GitHub stars. 
This repo does not have version tags. Ionic-AppAuth is an implementation of the openid’s [AppAuth-JS](https://github.com/openid/AppAuth-JS) for Ionic development. The documentation is minimal (close to none), but  has a React sample that you can examine:  https://github.com/wi3land/ionic-appauth-react-demo

2. [cordova-plugin-firebase-authentication](https://github.com/chemerisuk/cordova-plugin-firebase-authentication): 79 GitHub stars.
This is the project that is listed in the [ionicframework.com](https://ionicframework.com/docs/native/firebase-authentication) site. Even though it has ‘cordoba’ in its name, it claims to be compatible with Capacitor. It uses Firebase as the auth server.

3.  [capacitor-firebase-auth](https://github.com/baumblatt/capacitor-firebase-auth): 164 GiHub stars.
Another library that uses Firebase as the Auth server.

The other alternative is to use Ionic’s [Auth Connect](https://ionic.io/docs/auth-connect) which requires you to purchase the license.

I ultimately decided to go for #1 - to use the `ionic-appauth` library. It is open source (no license required), and is based on standard using Oauth2 Authorization Code Grant with Proof Key for Code Exchange (PKCE), which means you have a wider option of choosing the auth server providers.

The rest of the article gives a quick instruction on how to configure and run the `ionic-appauth` Demo App with Okta and Google Login.


## The `ionic-appauth` Demo App

### Setting Up the Auth Server & Configuring the App 

As I previously mentioned, React is my framework of choice. Thankfully I found a [Ionic React AppAuh demo app](https://github.com/wi3land/ionic-appauth-react-demo) in GitHub which facilitated my PoC.

Sadly the demo doesn’t come with any documentation, not even README, so I had to analyze the code. Fortunately the codebase is simple. I found that the auth related configurations are set in the src/services/AuthService.ts file.

I just needed to modify the values in the authConfig:
```javascript
authService.authConfig = {
      client_id: 'appauth', // AHA! These are the values I need to change
      server_host: 'http://localhost:5200',
      redirect_url: isPlatform('capacitor') ? 'com.appauth.demo://callback' : window.location.origin + '/loginredirect',
      end_session_redirect_url: isPlatform('capacitor') ?  'com.appauth.demo://endSession' : window.location.origin + '/endredirect',
      scopes: 'openid offline_access',
      pkce: true
    }
```

I used Okta as the Auth Server. The free developer account was sufficient to run the Demo. You can create one at https://developer.okta.com.

A quick summary of setting up Okta is as follows:
1. Go to "Application" and click the "Add Application" button.
2. Select Single-Page App and fill in the form. The most important fields are:
  - In the Login Redirect URI enter: http://localhost:8100/loginredirect and com.appauth.demo://callback
  - In the Login Redirect URI enter: http://localhost:8100/endredirect and com.appauth.demo://endSession
The first uri is for web, the second is for the mobile native (e.g. capacitor)

Since the title of this article is about Social Login, we will add federated Google login.
In Okta, 
1. Go to “Users” -> “Social & Identity Providers”
2. Click on Add Identity Provide and select "Google"
3. Give the IdP a name and copy paste the Client ID and Client Secret from [Google Dev Console](https://console.developers.google.com/).
4. The scopes should be `email, openid, profile`
5. Once the Google IdP is successfully added, you will see an entry in the list. Click the dark circle icon to the left of the name
6. You will need the IdP ID for configuring your Ionic application.

Now in the code, modify the config in `src/services/AuthService.ts` replacing  the `client_id` and `server_host` accordingly. FYI, the `server_host` is `https://{okta domain}` e.g.:  https://dev-XYZ.okta.com

Finally, for the demo app to connect with Google IdP through Okta, you must send extra parameters in the authService.signIn() method:
```javascript
function handleSignIn(e : any) {
        e.preventDefault();

        Auth.Instance.signIn({ idp: 'your-idp' });
}
```

> Initially I used Auth0 as my Auth server but learned that the OIDC well-known endpoint returns metadata with missing `end_session_endpoint` attribute. This caused the app to fail when I clicked the “Sign Out” Button.


### Running the App

Now that it is properly configured you can run the application locally as web app:
```shell
$ ionic serve
```
The browser will open with the app:

![web-ionic-1-landing](https://dev-to-uploads.s3.amazonaws.com/i/f1zyqyodmuhhslb0pu8z.png)

And when you click on "Sign In" button, it will take you to the Google Login form:
![web-ionic-2-userid](https://dev-to-uploads.s3.amazonaws.com/i/7l4xxiod44mfcd3qoc9g.png)

Once successfully logged in, you should be able to get the user details:
![web-ionic-5-user-details](https://dev-to-uploads.s3.amazonaws.com/i/vj6i5l3svniuve67qryy.png)
   


### Running the Mobile App

We are not done yet. Now we are going to proceed to deploy to mobile using Capacitor.

```shell
# Build the code (each time original source changes)
$ ionic build

# Copy the asset to the android project (after each ionic build)
$ ionic cap copy 

# Synchronize project by copying changes to android platform (When new plugins were added)
$ ionic cap sync

# Open the android studio
$ ionic cap open android
```

Assuming you have Android Studio, the last command will open the Android Studio(AS), an IDE based on IntelliJ.
From AS, select the preferred device (simulator) - any Pixel should be fine - and press the play button.
Once the device simulator shows up, press the "on" button to turn it on. Wait about a minute until the app is loaded on the screen.

## Conclusion

Here I have demonstrated that it is possible to integrate Ionic React mobile app with social login - in this case Google.

The demo repo `https://github.com/wi3land/ionic-appauth-react-demo` uses an older version of `ionic-appauth`, new never version has few braking changes in the API.

I have forked the project and made some minor changes including upgrading the `ionic-appauth` version to the latest and externalizing the configuration to `.env` file.

You can check my forked project with the improvements: [https://github.com/creasoft-dev/ionic-appauth-react-demo](https://github.com/creasoft-dev/ionic-appauth-react-demo).

Now that I have completed the PoC on authentication, my next step is to start building my real app.

I will post my learnings on building a mobile app using Ionic React + Redux + Redux Toolkit.
