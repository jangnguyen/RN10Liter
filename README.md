# How to change the text and theme of Google’s Sign-In button on Android?

Google’s
[SignInButton](https://developers.google.com/android/reference/com/google/android/gms/common/SignInButton)
is missing `android:text` and many other attributes that are available to the
`Button` class. In this post, I will show how to change the text on Google’s
Sign-In button easily using the standard `android:text`.

I'll also show how you can switch between dark and light button themes. At the
end of the post, a ready to use small Android library is included along with a
sample application to try the same.

### Requirements

* Android Studio 3.0.
* `compileSdkVersion 26` and `buildToolsVersion "26.0.2"`. This is what the sample
app is using. In order to use the SDK and the build tool version you have
installed, you can change the values in the `build.gradle`.
* `minSdkVersion` supported is `16`.

### Introduction

Do you want to provide **localization** for the Google Sign-In button? Maybe you
want to change the default “Sign In” text to “Sign in with Google”. Or based on
whether it is a **sign-in or sign-up flow**, you want to switch between “Sign in
with Google” and “Sign up with Google” text. As you might already know, to set
the text on an Android `Button`, you can use `android:text="{string}"` attribute
in your layout XML. However if you want to do the same for Google Sign-In
button, this attribute is not available.

On StackOverflow, there are obviously many questions which have been asked
related to this issue. One of the most visited ones is the following. However
most of its existing answers were hacks at the time of writing.

Follow along as I show you how you can use a very small
[library](https://github.com/shobhitpuri/custom-google-signin-button), created
using [Google’s recommended way to customize the
SignInButton](https://developers.google.com/identity/sign-in/android/custom-button),
that will enable you to use `android:text` attribute to set any text on the
button. The library also enables you to change the theme of the button to light
or dark easily.

### Usage

1.  Add the following to your `app` module level `build.gradle` file:



2. In your XML Layout, have the following:


### Library Options

If you notice the XML, there are two attributes:

* `app:isDarkTheme="{Boolean}"` : This is to enable you to switch between the
light (grey-white) theme and the dark (blue) theme for the button. The library
handles changing the text color, background color and color change on button
press based on Google's recommended guidelines.
* `android:text="{string}"`: This sets the text on the custom button.

<span class="figcaption_hack">Dark and Light themed Google SignIn button with custom text.</span>

### Why a library?

“Why create a library? Aren’t there already tons of libraries?”, you would say.

> I don't like using hacks and since you are here, this far in the article, I
> would assume you don't either.

The library was result of the issues I faced when trying to set text on the
`SignInButton`. **If the underlying implementation of Google's
**`SignInButton`** changes, the hacks would break**. The ideal Google
recommended solution is to create a custom button as mentioned on [Customizing
the Sign-In
Button](https://developers.google.com/identity/sign-in/android/custom-button).
Google also specifies the [branding
guidelines](https://developers.google.com/identity/branding-guidelines#sign-in-button)
which includes using custom icons and images for the button, setting specific
text size, paddings and other do's and don'ts for the logo.

As you can see the ideal solution involves some extra work. Instead of creating
a custom button just for my usage, I wanted to write some re-usable code, which
I can drag and drop in any of my projects and it would work out of the box.
That’s why I decided to create a small 3.93 KB library, so that **anyone facing
this issue need not spend time implementing a custom solution and can get the
custom Google Sign-In button working in no time**.

### Source Code and Sample Android Application

You can find the implementation of the library and a sample Android application
that is using the library here:

If you come across any issues or think of something that’s missing, you are more
than welcome to create an issue or open a pull request.

*****

*Originally published at
*[dev.to](https://dev.to/shobhit/how-to-change-text-and-theme-of-google-sign-in-button-android-6bf)*.*

* [Android](https://android.jlelse.eu/tagged/android?source=post)
* [Android
Libraries](https://android.jlelse.eu/tagged/android-libraries?source=post)
* [Android App
Development](https://android.jlelse.eu/tagged/android-app-development?source=post)
* [Programming](https://android.jlelse.eu/tagged/programming?source=post)
* [Mobile App
Development](https://android.jlelse.eu/tagged/mobile-app-development?source=post)

By clapping more or less, you can signal to us which stories really stand out.

### [Shobhit Puri](https://android.jlelse.eu/@shobhitpuri)

Android Team Lead @ TradeRev | Spiritual |  Nature Lover | Badminton Enthusiast
| Social welfare

### [AndroidPub](https://android.jlelse.eu/?source=footer_card)

The Pub(lication) for Android & Tech, focused on Development
