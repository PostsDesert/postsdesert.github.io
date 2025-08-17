## Portfolio

---

### Wholemeal – Meal Combo Generator

I build Wholemeal because I wasn't eating enough veggies and wanted a fun way to decide what to cook.
Spin the slot machine to generate combos containing a protein, carb, and veggie, save your favorites, and add your own foods. Swipe and keyboard gestures make navigation quick and intuitive.

<video
  id="demoVideo"
  width="30%"
  muted
  loop
  preload="metadata"
  poster="images/wholemeal_demo.jpeg"
  style="display:block; text-align: center; margin:auto; border-radius:8px;">
  <source src="images/wholemeal_demo.webm" type="video/webm">
  <source src="images/wholemeal_demo.mp4" type="video/mp4">
</video>

<script>
  const video = document.getElementById("demoVideo");

  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // reset to beginning
  });

  // Show controls only on mobile
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    video.setAttribute('controls', '');
  }
</script>
<br>

[![](https://img.shields.io/badge/Svelte-white?logo=svelte&logoColor=FF3E00)](#)
[![](https://img.shields.io/badge/JavaScript-white?logo=javascript&logoColor=F7DF1E)](#)
[![](https://img.shields.io/badge/CSS-white?logo=css&logoColor=1572B6)](#)
[![](https://img.shields.io/badge/HTML-white?logo=html5&logoColor=E34F26)](#)

[Try it out!](https://wholemeal.griffithbaker.com)<br>
[View code on GitHub](https://github.com/PostsDesert/wholemeal)

---

### Telegram Daily Notification Bot

A Telegram bot written in Go that sends daily motivational blurbs from a predefined list. The bot cycles through the blurbs and sends one each day at a scheduled time.

[![](https://img.shields.io/badge/Go-white?logo=go&logoColor=00ADD8)](#) [![](https://img.shields.io/badge/Docker-white?logo=docker&logoColor=2496ED)](#)

[View code on Github](https://github.com/PostsDesert/TelegramDailyNotification)

---

### Improving Netflix Recommendations Using Ensemble Models and Web Scraping

Developed a content/collaborative filtering recommendation system using PyTorch with web scraped metadata from IMDB, achieving significant RMSE reduction (69%) compared to the Netflix Prize winning algorithm (Belkor).

[![](https://img.shields.io/badge/Python-white?logo=Python)](#) [![](https://img.shields.io/badge/Jupyter-white?logo=Jupyter)](#) [![](https://img.shields.io/badge/PyTorch-white?logo=pytorch)](#) [![](https://img.shields.io/badge/Selenium-white?logo=selenium)](#)

[View code on Github](https://github.com/PostsDesert/Netflix-Recommendations-Web-Scrapping-Ensemble-Models)

---

### Automated Sizing Inference through Machine Learning Image Analysis
Devised and executed a precise and scalable strategy for extracting data points from a 2D image using Kubernetes, machine learning models, and computer vision libraries, accessible through a REST API interface.

{:refdef: style="text-align: center;"}
<img width="30%" style="text-align: center" src="images/FootScan_demo.png?raw=true" />
{: refdef}


[![](https://img.shields.io/badge/Python-white?logo=Python)](#) [![](https://img.shields.io/badge/Jupyter-white?logo=Jupyter)](#) [![](https://img.shields.io/badge/PyTorch-white?logo=pytorch)](#) [![](https://img.shields.io/badge/Google_Cloud-white?logo=google-cloud)](#) [![](https://img.shields.io/badge/Firebase-white?logo=firebase)](#) [![](https://img.shields.io/badge/kubernetes-white?logo=kubernetes)](#) [![](https://img.shields.io/badge/NumPy-white?logo=numpy&logoColor=013243)](#)

[Try the Product](https://getinstryde.com)

---

### A Simple Language Compiler - SimpleC
The SimpleC compiler compiles a custom programming language into Java or x86-64 (AT&T style) assembly code.
It supports many critical compiler features including lexical analysis, syntactic analysis, semantic analysis, and intermediate/target code generation.

[![](https://img.shields.io/badge/Java-white?logo=oracle&logoColor=F80000)](#)

[View code on Github](https://github.com/PostsDesert/SimpleC)

---

### Automatic Pre-Registration Script for IMLeague Events. - CurlForACurl
This project was created because I was tired of not being able to secure a spot for a yoga class at my college gym. The project's name is a slight play on words referring to the curl Linux command-line tool and curling weights.

[![](https://img.shields.io/badge/Python-white?logo=Python)](#) [![](https://img.shields.io/badge/Jupyter-white?logo=Jupyter)](#)

[View code on Github](https://github.com/PostsDesert/CurlForACurl)
