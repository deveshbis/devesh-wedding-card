<template>
  <div class="flex justify-center overflow-x-hidden">
    <div class="overflow-x-hidden" :class="[
      'relative h-[100vh] w-full md:w-[375px] flex items-start justify-center transition-all duration-700 pt-16',
      { 'backdrop-blur-md': !showContent }
    ]">
      <!-- Background -->
      <div class="absolute inset-0 bg-custom overflow-x-hidden">
        <div class="relative w-full md:w-[375px] h-full flex justify-end items-end">
          <!-- Background Image (Bottom Corner) -->
          <div class="butterfly-animation absolute inset-0 z-0 ml-[200px] mt-[120px]">
            <img src="/images/butterFly.gif" alt="Butterfly" class=" butterfly animate-fly1" />
            <img src="/images/butterFly2.gif" alt="Butterfly" class=" butterfly animate-fly2" />
            <img src="/images/butterFly3.gif" alt="Butterfly" class=" butterfly animate-fly3" />
            <img src="/images/butterFly.gif" alt="Butterfly" class=" butterfly animate-fly4" />
            <img src="/images/butterFly2.gif" alt="Butterfly" class=" butterfly animate-fly5" />
            <img src="/images/butterFly3.gif" alt="Butterfly" class=" butterfly animate-fly6" />
            <img src="/images/butterFly.gif" alt="Butterfly" class=" butterfly animate-fly7" />
            <img src="/images/butterFly2.gif" alt="Butterfly" class=" butterfly animate-fly8" />
          </div>
          <div class="butterfly-animation absolute inset-0 z-0 mr-[200px] mb-[120px]">
            <img src="/images/butterFly.gif" alt="Butterfly" class=" butterfly animate-fly1" />
            <img src="/images/butterFly2.gif" alt="Butterfly" class=" butterfly animate-fly2" />
            <img src="/images/butterFly3.gif" alt="Butterfly" class=" butterfly animate-fly3" />
            <img src="/images/butterFly.gif" alt="Butterfly" class=" butterfly animate-fly4" />
            <img src="/images/butterFly2.gif" alt="Butterfly" class=" butterfly animate-fly5" />
            <img src="/images/butterFly3.gif" alt="Butterfly" class=" butterfly animate-fly6" />
            <img src="/images/butterFly.gif" alt="Butterfly" class=" butterfly animate-fly7" />
            <img src="/images/butterFly2.gif" alt="Butterfly" class=" butterfly animate-fly8" />
          </div>
          <div class="absolute bottom-0 right-0">
            <img class="h-[340px]" src="/images/dev.png" alt="image" />
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 text-center ">
        <!-- Button to Start Celebration -->
        <div v-if="!showContent">
          <h1 class="text-4xl font-[800] font-bold text-[#9e1571] baloo-text animate-fadeDown leading-[50px]">দেবেশ &
            চন্দ্রার <br> শুভ বিবাহ</h1>
          <p class="text-[24px] text-pink-700 mt-2 baloo-text animate-fadeUp">Celebrating Love and Togetherness</p>
        </div>
        <div class="pt-4">
          <div>
            <audio ref="audioPlayer" autoplay loop>
              <source src="/audio/song.mp3" type="audio/mpeg">
              Your browser does not support the audio tag.
            </audio>
          </div>
          <button v-if="!showContent" class="baloo-text relative px-8 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#804588] to-purple-500 rounded-full
           shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-pulse"
            @click="startAnimation">
            <span class="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg blur opacity-50"></span>
            <span class="relative z-10">Invite</span>
          </button>
        </div>

        <!-- Animated Content -->
        <div v-if="showContent" class="text-center">

          <div v-if="currentPart === 1" class="relative">
            <div class="flex items-center gap-x-4 justify-center">
              <p class="text-[42px] font-bold text-[#9e1571] baloo-text animate-fadeDown">দেবেশ</p>
              <p class="text-[40px] font-bold  baloo-text animate-bounce">👩‍❤️‍👨</p>
              <p class="text-[42px] font-bold text-[#9e1571] baloo-text animate-fadeDown">চন্দ্রা</p>
            </div>
            <div>
              <p class="text-[24px] leading-[40px] text-pink-700 baloo-text animate-fadeIn">This is the start of
                something beautiful</p>
            </div>
            <div class="flex justify-center">
              <img src="/images/element3.png" alt="image" class="h-[120px] animate-fadeDown" />
            </div>
          </div>

          <div v-if="currentPart === 2">
            <p class="py-4 text-[44px] leading-[40px] font-[800] text-[#9e1571] baloo-text animate-fadeDown">ওঁ</p>
            <p class="text-[20px] leading-[30px] text-black font-[600] baloo-text">শ্রী শ্রী প্রজাপতয়ে নমোঃ নমঃ</p>
            <p class="py-4 text-[48px] leading-[40px] font-[800] text-black baloo-text">বধূবরণ</p>
            <p class="py-4 text-[44px] leading-[40px] font-[800] text-[#9e1571] baloo-text animate-fadeUp">বিবাহ
              নিমন্ত্রণ</p>
            <div class="flex justify-center">
              <img src="/images/element1.png" alt="image" class="h-[60px] animate-fadeDown" />
            </div>
          </div>

          <div v-if="currentPart === 3">
            <div class="px-4">
              <p class="text-[32px] leading-[40px] font-[600] black baloo-text animate-fadeDown">।। বর 🧑🏻‍💼 ।।</p>
              <p class="text-[42px] leading-[60px] font-[800] text-[#9e1571] baloo-text animate-fadeUp">কল্যাণীয় দেবেশ
                বিশ্বাস (প্রান্ত)</p>
              <!-- <p class="text-[24px] leading-[30px] font-[600] black baloo-text animate-fadeDown">(জ্যেষ্ঠ পুত্র)</p> -->
              <div class="pt-4">
                <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">পিতা: স্বর্গীয় সন্তোষ কান্তি
                  বিশ্বাস</p>
                <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">মাতা: অঞ্জনা চৌধুরী</p>
                <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">শ্রীবাস কুটির চৌধুরী বাড়ি,
                  গ্রামঃ ফটিকা,
                  পোস্ট অফিস + থানাঃ হাটহাজারী,
                  জেলাঃ চট্টগ্রাম। </p>

                <!-- <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">সন্তোষ বিশ্বাসের বাড়ি,
                  গ্রামঃ ফটিকা,
                  থানাঃ বাঁশখালী,
                  জেলাঃ চট্টগ্রাম। </p> -->
              </div>
            </div>
          </div>
          <div v-if="currentPart === 4">
            <div class="px-4">
              <p class="text-[32px] leading-[40px] font-[600] black baloo-text animate-fadeDown">।। কনে 👰🏻‍♀️ ।।</p>
              <p class="text-[42px] leading-[60px] font-[800] text-[#9e1571] baloo-text animate-fadeUp">কল্যাণীয়া
                চন্দ্রা দাশ </p>
              <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">পিতা: শ্রী দীপক দাশ
              </p>
              <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">মাতা: শ্রীমতি বেবী দাশ</p>
              <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">নেপাল মাস্টারের বাড়ি
                গ্রামঃ কৈনপুরা,
                থানাঃ আনোয়ারা, জেলাঃ চট্টগ্রাম। </p>
            </div>
          </div>
        </div>
        <div v-if="currentPart === 5">
          <div class="px-4">
            <p class="text-[32px] leading-[40px] font-[700] black baloo-text animate-fadeDown">।। স্মারকলিপি ।।</p>
            <p class="text-[24px] leading-[30px] font-[600] black baloo-text animate-fadeDown">শুভ বিবাহঃ</p>
            <div class="animate-fadeUp pt-4">
              <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">২০ মাঘ ১৪৩২ বাংলা, রোজ :
                মঙ্গলবার।
                <br>
                (০৩ ফেব্রুয়ারী ২০২৬ ইং)
              </p>
              <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">বিবাহ আসর: ওয়েডিং পার্ক কমিউনিটি
                হল,
                শাহ আমানত সেতু সংযোগ সড়ক, <br> তুলাতলী রাস্তার মাথা, বাকলিয়া, চট্টগ্রাম।
              </p>
              <p class="text-[20px] leading-[30px] text-black font-[500] baloo-text">বিবাহ লগ্নঃ রাত ১২ : ২৫ মিনিট
                ।</p>
            </div>
            <div class="flex justify-center">
              <img src="/images/element2.png" alt="image" class="h-[120px] animate-fadeUp" />
            </div>
          </div>
        </div>

        <div v-if="currentPart === 7">
          <div class="px-4">
            <p class="text-[32px] leading-[40px] font-[700] black baloo-text animate-fadeDown">।। যদিদং হৃদয়ং তব <br>
              তদিদং হৃদয়ং মম ।।</p>
            <div class="animate-fadeUp pt-4">
              <p class="text-[20px] leading-[30px] text-justify text-black font-[500] baloo-text">
                শ্রী শ্রী প্রজাপতি ঋষির আশীর্বাদ ও পরম করুণাময়
                ঈশ্বরের কৃপায় দুটি পরিবার মিলনের বন্ধনে আবদ্ধ
                হতে চলেছে। <br>
                এতদুপলক্ষে আমাদের ঐকান্তিক নিবেদন—
                মিলন মধুর এই শুভলগ্নে আত্মীয়, বন্ধু ও
                শুভানুধ্যায়ীদের সান্নিধ্যে সূচনা হোক এক আনন্দ
                বেলার। <br>
                আপনাদের উপস্থিতিতে আমাদের আগামীর পথ চলা
                কুসুমিত হোক।
              </p>
            </div>
          </div>
        </div>

        <div v-if="currentPart === 8" class="px-4">
          <p class="text-[36px] leading-[40px] font-[700] text-black baloo-text mb-4 animate-fadeDown">
            নিমন্ত্রণ বার্তা
          </p>

          <div class="animate-fadeUp">
            <p class="text-black text-[18px] font-[500] text-center baloo-text mb-3">
              ॥ সাত পাক, অগ্নি সাক্ষী রেখে করেছে বন্ধন<br>
              সুখ-শান্তিতে ভরে থাকুক তাদের এ জীবন ॥
            </p>

            <p class="text-black text-[18px] font-[500] text-left baloo-text mt-4">
              মহাশয় / মহাশয়া,
            </p>

            <p class="text-black text-[18px] font-[500] text-justify baloo-text">
              প্রজাপতি ধৰ্মের আশীর্বাদ কৃপায় ও মঙ্গলময় ঈশ্বরের আশীর্বাদে চিরায়ত নিয়মের আলিকে
              মঙ্গলসমূহ সানাইয়ের সুর মূর্ছনায়, বেদমন্ত্র উচ্চারণের মাধ্যমে আগামী
              <strong>০৩ ফেব্রুয়ারী ২০২৬ ইংরেজী, ২০ মাঘ ১৪৩২ বাংলা, মঙ্গলবার</strong>,
              আমার একমাত্র পুত্র <strong>কল্যাণীয় দেবেশ বিশ্বাস (প্রান্ত)</strong> এর
              শুভ পরিণয়ের দিন ধার্য করা হয়েছে।
            </p>

            <p class="text-black text-[18px] font-[500] text-justify baloo-text">
              উক্ত শুভ পরিণয় অনুষ্ঠানে আপনার/আপনাদের উপস্থিতি ও আশীর্বাদ একান্তভাবে কামনা করি।
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from "vue";

const showContent = ref(false);
const currentPart = ref(0);
const audioPlayer = ref(null);

const startAnimation = () => {
  showContent.value = true;
  let part = 1;

  // Play the audio when starting the animation
  if (audioPlayer.value) {
    audioPlayer.value.play();
  }

  const animationTiming = () => {
    currentPart.value = part;

    let delay = 0;

    // Set the time delay for each part
    switch (part) {
      case 1:
        delay = 4000; // Part 1 delay (2000ms)
        break;
      case 2:
        delay = 6000; // Part 2 delay (4000ms)
        break;
      case 3:
        delay = 10000; // Part 3 delay (8000ms)
        break;
      case 4:
        delay = 10000; // Part 4 delay (8000ms)
        break;
      case 5:
        delay = 10000; // Part 5 delay (8000ms)
        break;
      case 6:
        delay = 10000; // Part 6 delay (8000ms)
        break;
      case 7:
        delay = 10000; // Part 7 delay (8000ms)
        break;

      case 8:
        delay = 10000; // Part 7 delay (8000ms)
        break;

    }

    setTimeout(() => {
      part++;
      if (part > 8) {
        part = 1; // Reset to the first part for an infinite loop
      }
      animationTiming();
    }, delay); // Use the delay based on the current part
  };

  animationTiming();
};

</script>

<style scoped>
/* Import Baloo 2 Font */
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Dancing+Script:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&family=Baloo+2:wght@400..800&family=Dancing+Script:wght@400..700&family=Noto+Sans+Bengali:wght@100..900&family=Noto+Serif+Bengali:wght@100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');

/* Baloo Font Utility */
.baloo-text {
  font-family: "Atma", system-ui;
}

/* Background Styling */
.bg-custom {
  background-image: url('/images/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(0);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeUp {
  animation: fadeUp 1s ease-out forwards;
}

.animate-fadeDown {
  animation: fadeDown 1s ease-out forwards;
}

/* Animation Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In Animation */
.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
}

.animate-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes wave {

  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-15deg);
  }

  50% {
    transform: rotate(10deg);
  }

  75% {
    transform: rotate(-15deg);
  }
}

.animate-wave {
  display: inline-block;
  animation: wave 1.5s infinite;
}

@keyframes zoomFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Apply the animation to the image */
.zoom-fade-in {
  animation: zoomFadeIn 1.5s ease-out forwards;
}


.butterfly {
  position: absolute;
  width: 50px;
  height: auto;
}

/* Butterfly Animation */
@keyframes fly1 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(100px) translateY(-200px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(200px) translateY(0);
    opacity: 1;
  }
}

@keyframes fly2 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(-100px) translateY(200px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(-200px) translateY(0);
    opacity: 1;
  }
}

@keyframes fly3 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(150px) translateY(-100px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(300px) translateY(0);
    opacity: 1;
  }
}

@keyframes fly4 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(-150px) translateY(100px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(-300px) translateY(0);
    opacity: 1;
  }
}

/* Animation classes */
.animate-fly1 {
  animation: fly1 10s infinite ease-in-out;
}

.animate-fly2 {
  animation: fly2 12s infinite ease-in-out;
}

.animate-fly3 {
  animation: fly3 14s infinite ease-in-out;
}

.animate-fly4 {
  animation: fly4 16s infinite ease-in-out;
}

@keyframes fly5 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(200px) translateY(-150px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(400px) translateY(0);
    opacity: 1;
  }
}

@keyframes fly6 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(-200px) translateY(150px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(-400px) translateY(0);
    opacity: 1;
  }
}

@keyframes fly7 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(100px) translateY(300px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(200px) translateY(0);
    opacity: 1;
  }
}

@keyframes fly8 {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }

  50% {
    transform: translateX(-100px) translateY(-300px);
    opacity: 0.8;
  }

  100% {
    transform: translateX(-200px) translateY(0);
    opacity: 1;
  }
}

/* Animation classes for new butterflies */
.animate-fly5 {
  animation: fly5 18s infinite ease-in-out;
}

.animate-fly6 {
  animation: fly6 20s infinite ease-in-out;
}

.animate-fly7 {
  animation: fly7 22s infinite ease-in-out;
}

.animate-fly8 {
  animation: fly8 24s infinite ease-in-out;
}
</style>
