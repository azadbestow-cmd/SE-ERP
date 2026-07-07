pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }

    val flutterSdkPath: String = providers.gradleProperty("flutter.sdk").orNull
        ?: java.util.Properties().run {
            file("local.properties").inputStream().use { load(it) }
            getProperty("flutter.sdk")
        }
        ?: error("flutter.sdk property is not set in local.properties")
    includeBuild("$flutterSdkPath/packages/flutter_tools/gradle")
}

plugins {
    id("dev.flutter.flutter-plugin-loader") version "1.0.0"
    id("com.android.application") version "8.7.0" apply false
    id("org.jetbrains.kotlin.android") version "1.9.0" apply false
}

include(":app")