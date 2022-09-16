package com.example.webedit

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView

class MainActivity : AppCompatActivity() {
    lateinit var web:WebView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        web = findViewById(R.id.web)
        web.run {
            isVerticalScrollBarEnabled = false
            isHorizontalFadingEdgeEnabled = false
            loadUrl("file:///android_asset/edit/edit.html")
            settings?.run {
                domStorageEnabled = true
                javaScriptCanOpenWindowsAutomatically = true
                javaScriptEnabled = true
                useWideViewPort = true
                loadWithOverviewMode = true
            }
        }
    }
}